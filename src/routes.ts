import { FastifyInstance } from "fastify";
import { publicationsCreate, publicationsGet } from "./controller/HomeController";
import { userLogin, userNewPassword } from "./controller/AuthenticateController";
import { enterpriseGet, enterpriseNew } from "./controller/EnterpriseController";
import { userCreate, userDelete, userNotifications, userProfile } from "./controller/UserController";

export async function appRoutes(app: FastifyInstance) {
  app.get("/home/:id", publicationsGet);
  app.post("/home/new-publication", publicationsCreate);
  app.get("/enterprise/get-enterprise/:id", enterpriseGet);
  app.post("/enterprise/new-enterprise", enterpriseNew);
  app.post("/authenticate/login", userLogin)
  app.patch("/authenticate/new-password", userNewPassword)

  app.post("/user/new-user", userCreate)
  app.post("/user/delete-user", userDelete)
  app.get("/user/me/:id", userProfile)
  app.get("/user/notifications/:id", userNotifications)

  // app.put("/user/notifications", userChangesNotifications)
  app.get("/", ((request, reply) => {
    return reply.status(200).send("SAALVE!!!!")
  }))
}
