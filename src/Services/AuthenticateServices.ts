import { createNewUser, emailAlreadyExists, getUserAndChangeUserPassword, getUserByEmailAndPassword } from "@/Respositories/Authenticate/AuthenticateRepository";
import { FastifyRequest } from "fastify";
import { z } from "zod";

export async function getUser(request: FastifyRequest) {
    const requestBodySchema = z.object({
        email: z.string().email(),
        password: z.string()
    })

    const { email, password } = requestBodySchema.parse(request.body)

    const user = await getUserByEmailAndPassword(email, password)

    if (user == null) {
        throw new Error("❌ User not found, check your email and password")
    }

    return user
}

export async function createUser(request: FastifyRequest) {
    const requestBodySchema = z.object({
        email: z.string().email(),
        enterpriseId: z.string().uuid(),
        name: z.string()
    })

    const { email, name, enterpriseId } = requestBodySchema.parse(request.body)

    if (await emailAlreadyExists(email)) {
        throw new Error("❌ User Already Exists")
    }

    const enterpriseCode = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString()

    const user = await createNewUser(email, name, enterpriseCode, enterpriseId)

    return user
}

export async function changeUserPassword(request: FastifyRequest) {
    const requestBodySchema = z.object({
        email: z.string().email(),
        enterpriseCode: z.string(),
        newPassword: z.string()
    })

    const { email, newPassword, enterpriseCode } = requestBodySchema.parse(request.body)

    try {
        const user = await getUserAndChangeUserPassword(email, enterpriseCode, newPassword)
        return user
    } catch (error) {
        throw new Error("❌ User not found, check your email and code")
    }
}