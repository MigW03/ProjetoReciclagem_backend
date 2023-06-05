const Fastify = require('fastify')
const cors = require('@fastify/cors')
const userRoutes = require('./routes/user')

const app = Fastify()

app.register(cors, { origin: true })
app.register(userRoutes)


app.listen({ port: 3333 }).then(() => {
    console.log('⚙️ Servidor rodando na porta 3333')
})

