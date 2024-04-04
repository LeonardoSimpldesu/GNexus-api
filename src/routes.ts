import { FastifyInstance } from "fastify";
import { publicationsCreate, publicationsGet } from "./controller/HomeController";
import { userCreate, userLogin, userNewPassword } from "./controller/AuthenticateController";
import { enterpriseGet, enterpriseNew } from "./controller/EnterpriseController";

export async function appRoutes(app: FastifyInstance) {
  app.get("/home/:id", publicationsGet);
  app.post("/home/new-publication", publicationsCreate);
  app.get("/enterprise/get-enterprise/:id", enterpriseGet);
  app.post("/enterprise/new-enterprise", enterpriseNew);
  app.post("/authenticate/login", userLogin)
  app.post("/authenticate/new-user", userCreate)
  app.patch("/authenticate/new-password", userNewPassword)
  app.get("/", ((request, reply) => {
    return reply.status(200).send("SAALVE!!!!")
  }))
}
