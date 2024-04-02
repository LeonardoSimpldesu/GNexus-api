import { getPostsByEnterpriseId } from "@/Respositories/Publication/PublicationRepository";
import { FastifyRequest } from "fastify";
import z from "zod";

export async function homeServices(request: FastifyRequest) {
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
