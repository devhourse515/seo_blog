import { NextResponse } from 'next/server'
import { fetchAllUsers } from '../../fake-db/apps/user-list'

export async function GET() {
  try {
    const users = await fetchAllUsers()

    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}
