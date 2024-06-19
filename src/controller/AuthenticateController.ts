import { changeUserPassword, getUser } from "@/Services/AuthenticateServices";
import { FastifyReply, FastifyRequest } from "fastify";


export async function userLogin(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userData = await getUser(request)
    return reply.status(200).send(userData);

  } catch (error) {
    console.log(error)
    return reply.status(409).send(error)
  }
}

export async function userNewPassword(request: FastifyRequest, reply: FastifyReply) {
  try {
    const userData = await changeUserPassword(request)
    return reply.status(201).send(userData);
  } catch (error) {
    console.log(error)
    return reply.status(409).send(error)
  }

}