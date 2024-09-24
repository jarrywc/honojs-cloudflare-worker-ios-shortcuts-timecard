import { Hono } from 'hono'
import { Bindings } from './bindings'
import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { serveStatic } from "hono/serve-static";

const app = new Hono<{ Bindings: Bindings }>()


// app.use('/static/*', serveStatic({ root: '../prisma/docs' }))

app.get('/', async (c) => { 


  const adapter = new PrismaD1(c.env.DB)
  const prisma = new PrismaClient({ adapter })

  const users = await prisma.user.findMany()
  const result = JSON.stringify(users)

  return c.json(result)
})

app.get('/users', async (c) => {


  const adapter = new PrismaD1(c.env.DB)
  const prisma = new PrismaClient({ adapter })

  const users = await prisma.user.findMany()
  const result = JSON.stringify(users)

  return c.json(result)
})

app.post('/user', async (c) => {

  const r = c.req.json()
  console.log('req::', JSON.stringify(r))

  // const users = await prisma.user.create(

  // )
  return c.text("Post User")
})

export default app

// const usrs: PrismaClient['user'] = [
//   { fir: 'Bob', email: 'bob@prisma.io' },
//   { name: 'Bobo', email: 'bob@prisma.io' }, // Duplicate unique key!
//   { name: 'Yewande', email: 'yewande@prisma.io' },
//   { name: 'Angelique', email: 'angelique@prisma.io' },
// ]


