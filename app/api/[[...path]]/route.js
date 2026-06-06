import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const MONGO_URL = process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME || 'cwbe'

let cachedClient = null
async function getDb() {
  if (cachedClient) return cachedClient.db(DB_NAME)
  const client = new MongoClient(MONGO_URL)
  await client.connect()
  cachedClient = client
  return client.db(DB_NAME)
}

function cors(res) {
  res.headers.set('Access-Control-Allow-Origin', '*')
  res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  return res
}

export async function OPTIONS() {
  return cors(NextResponse.json({ ok: true }))
}

export async function GET(request, { params }) {
  const segments = params?.path || []
  const path = segments.join('/')
  try {
    if (path === '' || path === 'health') {
      return cors(NextResponse.json({ status: 'ok', service: 'cwbe-api', time: new Date().toISOString() }))
    }
    if (path === 'leads') {
      const db = await getDb()
      const leads = await db.collection('leads').find({}).sort({ createdAt: -1 }).limit(100).toArray()
      const safe = leads.map(({ _id, ...rest }) => rest)
      return cors(NextResponse.json({ leads: safe, total: safe.length }))
    }
    return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }))
  } catch (e) {
    console.error('GET error', e)
    return cors(NextResponse.json({ error: e.message }, { status: 500 }))
  }
}

export async function POST(request, { params }) {
  const segments = params?.path || []
  const path = segments.join('/')
  try {
    const body = await request.json().catch(() => ({}))
    if (path === 'leads') {
      const { type = 'prototype', name = '', email = '', phone = '', business = '', industry = '', currentWebsite = '', message = '', source = 'website' } = body
      if (!name || (!email && !phone)) {
        return cors(NextResponse.json({ error: 'Name and email or phone are required' }, { status: 400 }))
      }
      const lead = {
        id: uuidv4(),
        type,
        name: String(name).trim().slice(0, 120),
        email: String(email).trim().slice(0, 160),
        phone: String(phone).trim().slice(0, 30),
        business: String(business).trim().slice(0, 160),
        industry: String(industry).trim().slice(0, 80),
        currentWebsite: String(currentWebsite).trim().slice(0, 240),
        message: String(message).trim().slice(0, 2000),
        source,
        userAgent: request.headers.get('user-agent') || '',
        createdAt: new Date().toISOString(),
      }
      const db = await getDb()
      await db.collection('leads').insertOne(lead)
      return cors(NextResponse.json({ ok: true, lead: { id: lead.id, createdAt: lead.createdAt } }))
    }
    return cors(NextResponse.json({ error: 'Not found' }, { status: 404 }))
  } catch (e) {
    console.error('POST error', e)
    return cors(NextResponse.json({ error: e.message }, { status: 500 }))
  }
}
