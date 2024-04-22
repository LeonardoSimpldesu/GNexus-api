import { prisma } from "@/lib/prisma"
import { User } from "@prisma/client"

export async function emailAlreadyExists(email: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
        where: {
            email
        }
    })

    return user ? true : false
}

export async function getUserByEmailAndPassword(email: string, password: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
        where: {
            email, password
        }
    })

    return user
}

export async function createNewUser(email: string, name: string, password: string, enterpriseId: string): Promise<User | null> {
    const user = await prisma.user.create({
        data: {
            email,
            name,
            enterpriseId,
            password
        }
    })

    return user
}

export async function getUserAndChangeUserPassword(email: string, enterpriseCode: string, newPassword: string): Promise<User | null> {
    const user = await prisma.user.update({
        where: {
            email, password: enterpriseCode
        },
        data: {
            password: newPassword
        }
    })

    return user
}