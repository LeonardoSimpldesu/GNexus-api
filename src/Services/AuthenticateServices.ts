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