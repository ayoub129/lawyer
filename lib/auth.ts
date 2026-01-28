import { cookies } from 'next/headers'
import { getDb } from './db'
import { ObjectId } from 'mongodb'

export async function getSession() {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('admin_session')?.value

  if (!sessionToken) {
    return null
  }

  try {
    // Verify session (simple approach - decode and check)
    const decoded = Buffer.from(sessionToken, 'base64').toString('utf-8')
    const [adminId] = decoded.split(':')

    if (!ObjectId.isValid(adminId)) {
      return null
    }

    const db = await getDb()
    const admin = await db.collection('admins').findOne({ _id: new ObjectId(adminId) })

    if (!admin) {
      return null
    }

    return {
      id: admin._id.toString(),
      username: admin.username,
    }
  } catch (error) {
    return null
  }
}

export async function requireAuth() {
  const session = await getSession()

  if (!session) {
    throw new Error('Unauthorized')
  }

  return session
}
