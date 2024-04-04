import { prisma } from "@/lib/prisma";
import { Enterprise } from "@prisma/client";

export async function getEnterpriseById(enterpriseId: string): Promise<Enterprise | null> {
    const enterprise = await prisma.enterprise.findFirst({
        where: {
            id: enterpriseId
        }
    })

    return enterprise
}

export async function createNewEnterpriseByName(name: string): Promise<Enterprise | null> {
    const enterprise = await prisma.enterprise.create({
        data: {
            name
        }
    })

    return enterprise
}

