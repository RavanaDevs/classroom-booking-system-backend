import express from 'express'
import {
  createRequest,
  getAllRequest,
  updateRequest,
  deleteResourse,
} from '../controllers/requestController'

const requestRouter = express.Router()

requestRouter.post('/', createRequest)
requestRouter.get('/all', getAllRequest)
requestRouter.put('/', updateRequest)
requestRouter.delete('/', deleteResourse)

export default requestRouter
