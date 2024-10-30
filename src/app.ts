import express, { Application, NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRouter from './routes/userRouter'
import { clerkMiddleware } from '@clerk/express'
import errorHandler from './middlewares/error-handler'

const app: Application = express()

app.use(clerkMiddleware())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRouter)

app.use(errorHandler)

export { app }
