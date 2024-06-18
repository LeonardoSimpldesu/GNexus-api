import { emailAlreadyExists } from "@/Respositories/Authenticate/AuthenticateRepository"
import { createNewUser, deleteUserRepository, notificationsUserRepository, profileUserRepository } from "@/Respositories/User/UserRepository"
import { FastifyRequest } from "fastify"
import z from "zod"

export async function createUser(request: FastifyRequest) {
    const requestBodySchema = z.object({
        email: z.string().email(),
        name: z.string(),
        enterpriseId: z.string().uuid()
    })

    const { email, name, enterpriseId } = requestBodySchema.parse(request.body)

    if (await emailAlreadyExists(email)) {
        throw new Error("❌ User Already Exists")
    }

    const enterpriseCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString()

    const user = await createNewUser(email, name, enterpriseCode, enterpriseId)

    return user
}

export async function deleteUser(request: FastifyRequest) {
    const requestBodySchema = z.object({
        id: z.string().uuid(),
    })

    const { id } = requestBodySchema.parse(request.body)

    await deleteUserRepository(id)

}

export async function profileUser(request: FastifyRequest) {
    const requestParamsSchema = z.object({
        id: z.string().uuid(),
    })

    const { id } = requestParamsSchema.parse(request.params)

    const user = await profileUserRepository(id)
    return user
}

export async function notificationUser(request: FastifyRequest) {
    const requestParamsSchema = z.object({
        id: z.string().uuid(),
    })

    const { id } = requestParamsSchema.parse(request.params)

    const notifications = await notificationsUserRepository(id)
    return notifications
}

export async function updateNotificationUser(request: FastifyRequest) {
    const requestBodySchema = z.object({
        id: z.string().uuid(),
        
    })

    const { id } = requestBodySchema.parse(request.body)

    await notificationsUserRepository(id)
}

// export async function changesNotificationsUser(request: FastifyRequest) {
//     const requestBodySchema = z.object({
//         id: z.string().uuid(),

//     })

//     const { id } = requestBodySchema.parse(request.body)

//     await changesNotificationsUserRepository(id)
// }