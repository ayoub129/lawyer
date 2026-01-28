require('dotenv').config()
const { MongoClient } = require('mongodb')
const bcrypt = require('bcryptjs')

async function createAdmin() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error('MONGODB_URI is not set')
    process.exit(1)
  }

  const client = new MongoClient(uri)

  try {
    await client.connect()
    const db = client.db('legal_excellence')

    // Get admin credentials from environment or use defaults
    const username = process.env.ADMIN_USERNAME || 'admin'
    const password = process.env.ADMIN_PASSWORD || 'admin123'

    // Check if admin already exists
    const existingAdmin = await db.collection('admins').findOne({ username })
    if (existingAdmin) {
      console.log('Admin user already exists')
      process.exit(0)
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create admin user
    await db.collection('admins').insertOne({
      username,
      password: hashedPassword,
      createdAt: new Date(),
    })

    console.log('Admin user created successfully!')
    console.log(`Username: ${username}`)
    console.log(`Password: ${password}`)
    console.log('\n⚠️  Please change the default password after first login!')
  } catch (error) {
    console.error('Error creating admin:', error)
    process.exit(1)
  } finally {
    await client.close()
  }
}

createAdmin()
