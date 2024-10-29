import express from 'express'
import { addUser, getAllUsers } from '../controllers/userController'
import { requireAuth } from '@clerk/express'

const userRouter = express.Router()

userRouter.post('/', requireAuth(), addUser)
userRouter.get('/all', getAllUsers)

export default userRouter
