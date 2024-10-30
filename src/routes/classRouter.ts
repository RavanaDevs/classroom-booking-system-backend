import express from 'express'
import { createClassRoom, getAllClassRoom } from '../controllers/classController'

const classRoomRouter = express.Router()
classRoomRouter.post('/', createClassRoom)
classRoomRouter.get('/all',getAllClassRoom)

export default classRoomRouter
