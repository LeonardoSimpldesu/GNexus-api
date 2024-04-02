import { homeServices } from "@/Services/HomeServices";
import { FastifyReply, FastifyRequest } from "fastify";


export async function homeController(request: FastifyRequest, reply: FastifyReply) {
  try {
    const homeData = await homeServices(request)
    return reply.status(200).send(homeData);

  } catch (error) {
    
    console.log(error)
    return reply.status(409).send(error)
  }
}
