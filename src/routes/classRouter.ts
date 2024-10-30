import express from 'express'
import { createClassRoom } from '../controllers/classController'

const classRoomRouter = express.Router()
classRoomRouter.post('/', createClassRoom)

export default classRoomRouter
