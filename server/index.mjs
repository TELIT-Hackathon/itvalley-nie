import { Router } from 'express'
import express from 'express'
import { tagsApi } from './Routes/tagsApi.mjs'
import { processUser } from './login.mjs'
import mongoose from 'mongoose'
import { userApi } from './Routes/userApi.mjs'
import cors from 'cors'
import { requestApi } from './Routes/requestApi.mjs'
import { projectApi } from './Routes/projectApi.mjs'

await mongoose.connect('mongodb+srv://admin:aJlXDjXh6dLBUhWV@cluster0.ijfjind.mongodb.net/test')

const app = express()
app.use(express.json()) // for parsing application/json
app.use(cors())

const baseRouter = new Router()
baseRouter.use(async (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.originalUrl}`)
    console.log(`Body ${JSON.stringify(req.body)}`)

    req.user = await processUser(req)

    next()
})

baseRouter.use('/api/tags', tagsApi)
baseRouter.use('/api/user', userApi)
baseRouter.use('/api/requests', requestApi)
baseRouter.use('/api/projects', projectApi)

//let db = await mongoose.connect('mongodb://10.234.7.83:27017/hk22')

app.use('/', baseRouter)

const port = 8080
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
