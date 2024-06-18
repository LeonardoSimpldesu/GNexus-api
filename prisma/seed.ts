import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
    const enterprise = await prisma.enterprise.create({
        data:{
            name: 'Empresa Teste'
        }
    })
    const notifications = await prisma.notification.create({
        data: {
            title: 'Notification 1',
            name: 'Notification 1',
            message: 'Notification 1',
        }
    })
    const alice = await prisma.user.create({
        data: {
            email: 'alice@prisma.io',
            name: 'Alice',
            lastName: 'Pereira',
            password: '123',
            department: 'tecnologies',
            enterpriseId: enterprise.id
        },
    })
    const notificationActive = await prisma.notificationActive.create({
        data: {
            notificationId: notifications.id,
            userId: alice.id
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })