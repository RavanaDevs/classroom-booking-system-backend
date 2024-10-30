import express from 'express'
import { createResourse, deleteResourse, getAllResourse, updateResourse } from '../controllers/resourseController'
import { requireAuth } from '@clerk/express'

const resourseRouter = express.Router()

resourseRouter.post('/', createResourse)
resourseRouter.get('/all', getAllResourse)
resourseRouter.put('/', updateResourse)
resourseRouter.delete('/', deleteResourse)

export default resourseRouter
