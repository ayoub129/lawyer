import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { requireAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, practiceArea, date, time, message } = body

    // Validate required fields
    if (!name || !email || !phone || !practiceArea || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const db = await getDb()
    await db.collection('consultations').insertOne({
      name,
      email,
      phone,
      practiceArea,
      preferredDate: date,
      preferredTime: time,
      message: message || null,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    })

    return NextResponse.json(
      { message: 'Consultation request submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing consultation request:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { 
        error: 'Failed to submit consultation request. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}

// GET endpoint to retrieve consultations (for admin use - requires auth)
export async function GET(request: NextRequest) {
  try {
    // Require authentication
    await requireAuth()

    const db = await getDb()
    const consultations = await db
      .collection('consultations')
      .find({})
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray()

    return NextResponse.json(
      { consultations },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    console.error('Error fetching consultations:', error)
    return NextResponse.json(
      { error: 'Failed to fetch consultations' },
      { status: 500 }
    )
  }
}
