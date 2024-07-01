import mongoose from 'mongoose'
const { connectToDataBase } = require('../../../../../libs/db/mongodb')

export const fetchAllInvoices = async () => {
  await connectToDataBase()
  try {
    const db = mongoose.connection
    const invoicesCollection = db.collection('invoices')
    const invoices = await invoicesCollection.find().toArray()
    return invoices
  } catch (error) {
    console.error('Error fetching invoices:', error)
    throw error
  }
}
