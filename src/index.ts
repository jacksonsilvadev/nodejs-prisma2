import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(); 

async function createUser () {

  prisma.user.create({
    data: {
      email: 'jacksonsilvasfdev@gmail.com',
      name: "Jackson Silva Rodrigues"
    }
  }).then((user) => {
    return user
  }).catch((err) => {
    return err
  })
}

async function getUsers () {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  return allUsers
}

async function main() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@prisma.io",
      Post: {
        create: { title: "Hello World" },
      },
      Profile: {
        create: { bio:  "I like turtles" }
      }
    }
  })
  const allUsers = await prisma.user.findMany({
    include: { 
      Post: true,
      Profile: true 
    },
  })
  console.dir(allUsers, { depth: null })
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })
