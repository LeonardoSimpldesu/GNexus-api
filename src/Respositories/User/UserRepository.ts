import { prisma } from "@/lib/prisma"
import { User } from "@prisma/client"

export async function createNewUser(email: string, name: string, password: string, enterpriseId: string): Promise<User | null> {
    const user = await prisma.user.create({
        data: {
            email,
            name,
            password,
            enterpriseId
        }
    })

    return user
}

export async function deleteUserRepository(id: string) {
    await prisma.user.delete({
        where: {
            id
        }
    })
}

export async function profileUserRepository(id: string) {
    const user = await prisma.user.findFirst({
        where: {
            id
        },
        include: {
            Enterprise: true
        }
    })
    return user
}

export async function notificationsUserRepository(id: string) {
    const notification = await prisma.notificationActive.findMany({
        where:{
            userId: id
        },
        include: {
            Notification: true
        }
    })
    return notification
}

// export async function changesNotificationsUserRepository(userId: string, notificationId: string, cellphone: boolean, email: boolean) {
//     await prisma.notificationActive.updateMany({
//         where:{
//             userId: userId,
//             notificationId: notificationId,
//         },
//         data: {
//             cellphone: cellphone,
//             email: email,
//         }
//     })
// }