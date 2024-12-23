import express from 'express'
import {
  createUser,
  deleteUser,
  getAllLectureres,
  getAllUsers,
  updateUser,
} from '../controllers/userController'
import { requireAuth } from '@clerk/express'

const userRouter = express.Router()

userRouter.post('/', requireAuth(), createUser)
userRouter.get('/all', getAllUsers)
userRouter.get('/lecturers', getAllLectureres)
userRouter.put('/', updateUser)
userRouter.delete('/', deleteUser)

export default userRouter
