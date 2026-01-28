'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

interface Consultation {
  _id: string
  name: string
  email: string
  phone: string
  practiceArea: string
  preferredDate: string
  preferredTime: string
  message?: string
  status: string
  createdAt: string
}

interface Contact {
  _id: string
  name: string
  email: string
  phone: string
  service: string
  message: string
  status: string
  createdAt: string
}

export default function AdminPage() {
  const router = useRouter()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [consultations, setConsultations] = useState<Consultation[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [activeTab, setActiveTab] = useState<'consultations' | 'contacts'>('consultations')
  const [isLoadingData, setIsLoadingData] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/check', { credentials: 'include' })
      if (response.ok) {
        setIsAuthenticated(true)
        loadData()
      } else {
        setIsAuthenticated(false)
      }
    } catch (error) {
      setIsAuthenticated(false)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsAuthenticated(true)
        loadData()
      } else {
        setLoginError(data.error || 'Invalid credentials')
      }
    } catch (error) {
      setLoginError('Failed to login. Please try again.')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      })
      setIsAuthenticated(false)
      router.push('/admin')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const loadData = async () => {
    setIsLoadingData(true)
    try {
      const [consultationsRes, contactsRes] = await Promise.all([
        fetch('/api/consultation', { credentials: 'include' }),
        fetch('/api/contacts', { credentials: 'include' }),
      ])

      if (consultationsRes.ok) {
        const consultationsData = await consultationsRes.json()
        setConsultations(consultationsData.consultations || [])
      }

      if (contactsRes.ok) {
        const contactsData = await contactsRes.json()
        setContacts(contactsData.contacts || [])
      }
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setIsLoadingData(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const practiceAreaNames: Record<string, string> = {
    corporate: 'Corporate Law',
    ip: 'Intellectual Property',
    litigation: 'Litigation',
    estate: 'Estate Planning',
    employment: 'Employment Law',
    'real-estate': 'Real Estate Law',
    other: 'Other',
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <main className="bg-white min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-md w-full mx-auto px-8">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <h1 className="font-heading playfair-display text-4xl mb-6 font-bold text-center text-text-primary">
                Admin Login
              </h1>
              <form onSubmit={handleLogin} className="space-y-6">
                {loginError && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {loginError}
                  </div>
                )}
                <div>
                  <label htmlFor="username" className="block text-text-primary font-medium mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full bg-white border-2 border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-text-primary font-medium mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border-2 border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <div className="max-w-full md:max-w-[95%] mx-auto px-8 py-12">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-heading playfair-display text-4xl md:text-5xl font-bold text-text-primary">
              Admin Dashboard
            </h1>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-border">
            <button
              onClick={() => setActiveTab('consultations')}
              className={`pb-4 px-4 font-semibold transition-colors ${
                activeTab === 'consultations'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Consultations ({consultations.length})
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`pb-4 px-4 font-semibold transition-colors ${
                activeTab === 'contacts'
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Contact Messages ({contacts.length})
            </button>
          </div>

          {/* Content */}
          {isLoadingData ? (
            <div className="text-center py-12">
              <div className="text-xl text-text-secondary">Loading...</div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-border shadow-md overflow-hidden">
              {activeTab === 'consultations' ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Phone</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Practice Area</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Date</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Time</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Message</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Submitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {consultations.length === 0 ? (
                        <tr>
                          <td colSpan={9} className="px-6 py-12 text-center text-text-secondary">
                            No consultations found
                          </td>
                        </tr>
                      ) : (
                        consultations.map((consultation) => (
                          <tr key={consultation._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-text-primary">{consultation.name}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">{consultation.email}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">{consultation.phone}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">
                              {practiceAreaNames[consultation.practiceArea] || consultation.practiceArea}
                            </td>
                            <td className="px-6 py-4 text-sm text-text-primary">{consultation.preferredDate}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">{consultation.preferredTime}</td>
                            <td className="px-6 py-4 text-sm text-text-primary max-w-md">
                              {consultation.message ? (
                                <span className="block truncate" title={consultation.message}>
                                  {consultation.message}
                                </span>
                              ) : (
                                <span className="text-text-secondary italic">No message</span>
                              )}
                            </td>
                            <td className="px-6 py-4 text-sm">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  consultation.status === 'pending'
                                    ? 'bg-yellow-100 text-yellow-800'
                                    : consultation.status === 'completed'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-gray-100 text-gray-800'
                                }`}
                              >
                                {consultation.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-text-secondary">{formatDate(consultation.createdAt)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-primary-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Email</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Phone</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Service</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Message</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Status</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-text-primary">Submitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {contacts.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="px-6 py-12 text-center text-text-secondary">
                            No contact messages found
                          </td>
                        </tr>
                      ) : (
                        contacts.map((contact) => (
                          <tr key={contact._id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-text-primary">{contact.name}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">{contact.email}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">{contact.phone}</td>
                            <td className="px-6 py-4 text-sm text-text-primary">{contact.service}</td>
                            <td className="px-6 py-4 text-sm text-text-primary max-w-md truncate">{contact.message}</td>
                            <td className="px-6 py-4 text-sm">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                  contact.status === 'new'
                                    ? 'bg-blue-100 text-blue-800'
                                    : contact.status === 'read'
                                    ? 'bg-gray-100 text-gray-800'
                                    : 'bg-green-100 text-green-800'
                                }`}
                              >
                                {contact.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-text-secondary">{formatDate(contact.createdAt)}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
