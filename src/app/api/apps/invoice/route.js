import { NextResponse } from 'next/server'
import { fetchAllInvoices } from '../../fake-db/apps/invoice'

export async function GET() {
  try {
    const invoices = await fetchAllInvoices()

    return NextResponse.json(invoices)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch invoices' }, { status: 500 })
  }
}
