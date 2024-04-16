import { Publication } from "@prisma/client";

export class HomeDto { 
    recentPosts: Publication[] = []
}