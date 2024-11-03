import express, { Application, NextFunction, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRouter from './routes/userRouter'
import { clerkMiddleware } from '@clerk/express'
import errorHandler from './middlewares/error-handler'
import resourseRouter from './routes/resourseRouter'
import reservationRouter from './routes/reservationRouter'
import classRoomRouter from './routes/classRouter'
import requestRouter from './routes/requestRouter'

const app: Application = express()

app.use(clerkMiddleware())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/user', userRouter)
app.use('/resource', resourseRouter)
app.use('/reservation', reservationRouter)
app.use('/class',classRoomRouter)
app.use('/request',requestRouter)

app.use(errorHandler)

export { app }
