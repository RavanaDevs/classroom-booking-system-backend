import express from 'express'
import { createResourse, getAllResourse, updateResourse } from '../controllers/resourseController'
import { requireAuth } from '@clerk/express'

const resourseRouter = express.Router()

resourseRouter.post('/', createResourse)
resourseRouter.get('/all', getAllResourse)
resourseRouter.put('/', updateResourse)

export default resourseRouter
