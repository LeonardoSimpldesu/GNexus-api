import { prisma } from "@/lib/prisma";
import { Publication } from "@prisma/client";

export async function getPostsByEnterpriseId(enterpriseId: string): Promise<Publication[] | []> {
    const posts = await prisma.publication.findMany({
        where: {
            enterpriseId
        }
    })

    return posts
}

export async function createPostByDescriptionImageEnterpriseIdUserId(description: string, image: string, userId: string, enterpriseId: string): Promise<Publication | null> {
    const post = await prisma.publication.create({
        data: {
            description,
            image,
            enterpriseId,
            userId
        }
    })

    return post
}