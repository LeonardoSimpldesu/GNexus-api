import { createPostByDescriptionImageEnterpriseIdUserId, getPostsByEnterpriseId } from "@/Respositories/Publication/PublicationRepository";
import { FastifyRequest } from "fastify";
import z from "zod";

export async function getPublicationsByEnterpriseId(request: FastifyRequest) {
  const requestParamsSchema = z.object({
    id: z.string()
  })

  const { id } = requestParamsSchema.parse(request.params)

  const posts = await getPostsByEnterpriseId(id)

  if (posts.length == 0) {
    throw new Error('❌ This Enterprise do not have publications!');
  }

  return posts
}

export async function createNewPublication(request: FastifyRequest) {
  const requestBodySchema = z.object({
    description: z.string(),
    image: z.string(),
    userId: z.string().uuid(),
    enterpriseId: z.string().uuid(),
  })

  const { description, image, userId, enterpriseId } = requestBodySchema.parse(request.body)

  const posts = await createPostByDescriptionImageEnterpriseIdUserId(description, image, userId, enterpriseId)

  if (posts == null) {
    throw new Error('❌ Error in create a new publication!');
  }

  return posts
}
