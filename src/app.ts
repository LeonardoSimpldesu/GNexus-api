import fastify from 'fastify'
import { appRoutes } from './routes'

const app = fastify()

app.register(appRoutes)

export default app