import { NextRequest, NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { requireAuth } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // Check if MongoDB URI is configured
    if (!process.env.MONGODB_URI) {
      console.error('MONGODB_URI is not configured')
      return NextResponse.json(
        { 
          error: 'Server configuration error. Please contact support.',
          details: 'Database connection not configured'
        },
        { status: 500 }
      )
    }

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
    let db
    try {
      db = await getDb()
    } catch (dbError) {
      console.error('Database connection error:', dbError)
      return NextResponse.json(
        { 
          error: 'Database connection failed. Please try again later.',
          details: dbError instanceof Error ? dbError.message : 'Unknown database error'
        },
        { status: 500 }
      )
    }

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
    const errorStack = error instanceof Error ? error.stack : undefined
    
    return NextResponse.json(
      { 
        error: 'Failed to submit consultation request. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined,
        ...(process.env.NODE_ENV === 'development' && errorStack ? { stack: errorStack } : {})
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
