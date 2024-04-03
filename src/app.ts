import fastify from 'fastify'
import { appRoutes } from './routes'
import { env } from "./env";
console.log("📃📃📃📃📃📃📃 FOOOODAS");
const app = fastify()

// app.register(appRoutes)

app
.listen({
    host: "0.0.0.0",
    port: env.PORT,
})
.then(() => {
    console.log("✅ HTTP Server Running!");
});
console.log("👌👌👌👌👌👌 PIIITON");
export default app