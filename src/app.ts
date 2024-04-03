"use strict";

import fastify from 'fastify'
import { appRoutes } from './routes'
import { env } from "./env";
console.log("📃📃📃📃📃📃📃 FOOOODAS");
const app = fastify({
    logger: true,
  })

app.register(appRoutes)

export default async (req: any, res: any) => {
    await app.ready();
    app.server.emit('request', req, res);
}

// app
// .listen({
//     host: "0.0.0.0",
//     port: env.PORT,
// })
// .then(() => {
//     console.log("✅ HTTP Server Running!");
// });
// console.log("👌👌👌👌👌👌 PIIITON");

// export default app