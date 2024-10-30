import express from 'express'
import { createClassRoom, deleteClassRoom, getAllClassRoom, updateClassRoom } from '../controllers/classController'

const classRoomRouter = express.Router()
classRoomRouter.post('/', createClassRoom)
classRoomRouter.get('/all',getAllClassRoom)
classRoomRouter.put('/', updateClassRoom)
classRoomRouter.delete('/', deleteClassRoom)
export default classRoomRouter
