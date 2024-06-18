import { createUser, deleteUser, notificationUser, profileUser, updateNotificationUser } from "@/Services/UserServices";
import { FastifyRequest, FastifyReply } from "fastify";

export async function userCreate(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userData = await createUser(request)
      return reply.status(201).send(userData);
  
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  

  }
export async function userDelete(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userData = await deleteUser(request)
      return reply.status(201).send(userData);
  
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  }

export async function userProfile(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userData = await profileUser(request)
      return reply.status(201).send(userData);
  
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  
  }

export async function userNotifications(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userData = await notificationUser(request)
      return reply.status(201).send(userData);
  
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  
  }

export async function userUpdateNotifications(request: FastifyRequest, reply: FastifyReply) {
    try {
      const userData = await updateNotificationUser(request)
      return reply.status(201).send(userData);
  
    } catch (error) {
      console.log(error)
      return reply.status(409).send(error)
    }
  
  }

// export async function userChangesNotifications(request: FastifyRequest, reply: FastifyReply) {
//     try {
//       const userData = await changesNotificationsUser(request)
//       return reply.status(201).send(userData);
  
//     } catch (error) {
//       console.log(error)
//       return reply.status(409).send(error)
//     }
  
//   }

