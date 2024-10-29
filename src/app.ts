import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import userRouter from './routes/userRouter'

const app: Application = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRouter)

export { app }
