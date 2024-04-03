import { createNewEnterpriseByName, getEnterpriseById } from "@/Respositories/Enterprise/EnterpriseRepository";
import { FastifyRequest } from "fastify";
import z from "zod";

export async function createNewEnterprise(request: FastifyRequest) {
  const requestBodySchema = z.object({
    name: z.string()
  })

  const { name } = requestBodySchema.parse(request.body)

  const enterprise = await createNewEnterpriseByName(name)

  if (enterprise == null) {
    throw new Error('❌ Error in create a new enterprise!');
  }

  return enterprise
}

export async function getEnterprise(request: FastifyRequest) {
  const requestParamsSchema = z.object({
    id: z.string()
  })

  const { id } = requestParamsSchema.parse(request.params)

  const enterprise = await getEnterpriseById(id)

  if (enterprise == null) {
    throw new Error('❌ This Enterprise do not exists!');
  }

  return enterprise
}
