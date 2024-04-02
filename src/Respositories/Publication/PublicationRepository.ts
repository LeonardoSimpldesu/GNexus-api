import { prisma } from "../../lib/prisma";
import { Publication } from "@prisma/client";

export async function getPostsByEnterpriseId(enterpriseId: string): Promise<Publication[] | []> {
    const posts = await prisma.publication.findMany({
        where: {
            enterpriseId
        }
    })

    return posts
}