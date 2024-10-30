import express from 'express'
import { createResourse, getAllResourse } from '../controllers/resourseController'
import { requireAuth } from '@clerk/express'

const resourseRouter = express.Router()

resourseRouter.post('/', createResourse)
resourseRouter.get('/all', getAllResourse)

export default resourseRouter
