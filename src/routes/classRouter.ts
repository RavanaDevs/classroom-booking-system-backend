import express from 'express'
import { createClass } from '../controllers/classController'
import { requireAuth } from '@clerk/express'

const classRouter = express.Router()
classRouter.post('/', createClass)

export default classRouter
