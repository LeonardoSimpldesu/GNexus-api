import { createNewPublication, getPublicationsByEnterpriseId } from "@/Services/HomeServices";
import { FastifyReply, FastifyRequest } from "fastify";


export async function publicationsGet(request: FastifyRequest, reply: FastifyReply) {
  try {
    const homeData = await getPublicationsByEnterpriseId(request)
    return reply.status(200).send(homeData);

  } catch (error) {
    
    console.log(error)
    return reply.status(409).send(error)
  }
}

export async function publicationsCreate(request: FastifyRequest, reply: FastifyReply) {
  try {
    const homeData = await createNewPublication(request)
    return reply.status(200).send(homeData);

  } catch (error) {
    
    console.log(error)
    return reply.status(409).send(error)
  }
}
