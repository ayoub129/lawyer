import { MongoClient, Db } from 'mongodb'

const uri = process.env.MONGODB_URI

// Use a global variable pattern for both dev and production
// This is important for serverless environments like Vercel
// where we want to reuse connections across function invocations
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

function getClientPromise(): Promise<MongoClient> {
  if (!uri) {
    throw new Error('MONGODB_URI environment variable is not set. Please configure it in your Vercel environment variables.')
  }

  // Check if we already have a connection promise cached
  if (global._mongoClientPromise) {
    return global._mongoClientPromise
  }

  // Create new client with minimal options
  // MongoDB Atlas connection strings already include all necessary SSL/TLS settings
  const client = new MongoClient(uri, {
    // Minimal options - let MongoDB handle SSL/TLS from connection string
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
    socketTimeoutMS: 45000,
  })

  // Cache the connection promise
  global._mongoClientPromise = client.connect()
  
  return global._mongoClientPromise
}

export async function getDb(): Promise<Db> {
  try {
    const clientPromise = getClientPromise()
    const client = await clientPromise
    
    // Test the connection
    await client.db('admin').command({ ping: 1 })
    
    return client.db('legal_excellence')
  } catch (error) {
    console.error('MongoDB connection error:', error)
    
    // Reset the promise on error to allow retry on next call
    if (global._mongoClientPromise) {
      global._mongoClientPromise = undefined
    }
    
    // Provide more helpful error message
    if (error instanceof Error) {
      if (error.message.includes('SSL') || error.message.includes('TLS') || error.message.includes('tlsv1')) {
        throw new Error('SSL/TLS connection error. Please verify your MongoDB Atlas connection string and network access settings.')
      }
      throw error
    }
    
    throw new Error('Failed to connect to MongoDB. Please check your connection string and try again.')
  }
}
