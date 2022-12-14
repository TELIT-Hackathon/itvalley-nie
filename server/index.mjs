import { Router } from 'express'
import express from 'express'
import { skillsApi } from './Routes/skillsApi.mjs'
import { processUser } from './login.mjs'
import mongoose from 'mongoose'
import { userApi } from './Routes/userApi.mjs'
import cors from 'cors'
import { requestApi } from './Routes/requestApi.mjs'

await mongoose.connect('mongodb+srv://admin:aJlXDjXh6dLBUhWV@cluster0.ijfjind.mongodb.net/test')

const app = express()
app.use(express.json()) // for parsing application/json
app.use(cors())

const baseRouter = new Router()
baseRouter.use(async (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`)
    console.log(`Body ${JSON.stringify(req.body)}`)

    req.user = await processUser(req)

    next()
})

baseRouter.use('/api/skills', skillsApi)
baseRouter.use('/api/user', userApi)
baseRouter.use('/api/requests', requestApi)

//let db = await mongoose.connect('mongodb://10.234.7.83:27017/hk22')

app.use('/', baseRouter)

const port = 8080
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
