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
    app.ready().then(() => {
        console.log('successfully booted!')
      }, (err) => {
        console.log('an error happened', err)
      })
}

app.listen((err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
})


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