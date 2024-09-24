import { PrismaClient } from '@prisma/client'

async function createMany(prisma: PrismaClient, users: []) {


    const create  = await prisma.user.createMany({
        data: users,
      })
}


