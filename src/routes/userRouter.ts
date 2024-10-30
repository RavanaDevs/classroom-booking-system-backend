import express from 'express'
import {
  createUser,
  getAllLectureres,
  getAllUsers,
} from '../controllers/userController'
import { requireAuth } from '@clerk/express'

const userRouter = express.Router()

userRouter.post('/', requireAuth(), createUser)
userRouter.get('/all', getAllUsers)
userRouter.get('/lecturers', getAllLectureres)

export default userRouter
