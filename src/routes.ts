import { FastifyInstance } from "fastify";
import { homeController } from "./controller/HomeController";
import { userCreate, userLogin, userNewPassword } from "./controller/AuthenticateController";

export async function appRoutes(app: FastifyInstance) {
  app.get("/home/:id", homeController);
  app.post("/authenticate/login", userLogin)
  app.post("/authenticate/new-user", userCreate)
  app.patch("/authenticate/new-password", userNewPassword)
  app.get("/", ((request, reply) => {
    return reply.status(409).send("SAALVE!!!!")
  }))
}
