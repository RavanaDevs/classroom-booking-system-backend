import express from 'express'
import { createUser, getAllUsers } from '../controllers/userController'
import { requireAuth } from '@clerk/express'

const userRouter = express.Router()

userRouter.post('/', requireAuth(), createUser)
userRouter.get('/all', getAllUsers)

export default userRouter
