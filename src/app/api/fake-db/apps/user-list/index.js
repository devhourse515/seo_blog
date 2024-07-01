import mongoose from 'mongoose'
import { connectToDataBase } from '../../../../../libs/db/mongodb'

export const fetchAllUsers = async () => {
  await connectToDataBase()

  try {
    const db = mongoose.connection
    const usersCollection = db.collection('users')
    const users = await usersCollection.find().toArray()

    return users
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}
