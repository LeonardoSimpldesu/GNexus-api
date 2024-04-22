import { prisma } from "@/lib/prisma";
import { Publication } from "@prisma/client";

export async function getPostsByEnterpriseId(enterpriseId: string): Promise<Publication[] | []> {
    const posts = await prisma.publication.findMany({
        where: {
            enterpriseId
        }, include: {
            user: true
        }
    })

    return posts
}

export async function createPostByDescriptionImageEnterpriseIdUserId(description: string, image: string, userId: string, enterpriseId: string, title: string): Promise<Publication | null> {
    const post = await prisma.publication.create({
        data: {
            description,
            image,
            title,
            enterpriseId,
            userId
        }
    })

    return post
}