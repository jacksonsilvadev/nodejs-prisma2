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
  // ... you will write your Prisma Client queries here
  await createUser()
  return getUsers()
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })
