import { HomeDto } from "@/Dto/HomeDto";

import { createNewPublication, getPublicationsByEnterpriseId } from "@/Services/HomeServices";
import { FastifyReply, FastifyRequest } from "fastify";


export async function publicationsGet(request: FastifyRequest, reply: FastifyReply) {
  try {
    var x: HomeDto = new HomeDto(); 
    const homeData = await getPublicationsByEnterpriseId(request)

    x.recentPosts.push(...homeData)
   
    return reply.status(200).send(x);

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
