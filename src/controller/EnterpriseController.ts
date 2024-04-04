import { createNewEnterprise, getEnterprise } from "@/Services/EnterpriseServices";
import { FastifyReply, FastifyRequest } from "fastify";


export async function enterpriseNew(request: FastifyRequest, reply: FastifyReply) {
  try {
    const enterpriseData = await createNewEnterprise(request)
    return reply.status(200).send(enterpriseData);

  } catch (error) {
    
    console.log(error)
    return reply.status(409).send(error)
  }
}

export async function enterpriseGet(request: FastifyRequest, reply: FastifyReply) {
  try {
    const enterpriseData = await getEnterprise(request)
    return reply.status(200).send(enterpriseData);

  } catch (error) {
    
    console.log(error)
    return reply.status(409).send(error)
  }
}