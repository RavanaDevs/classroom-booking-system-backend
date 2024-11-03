import { z } from 'zod'
import { NextFunction, Request, Response } from 'express'
import ClassroomRequest from '../models/classroomRequestModel'
import classroomRequestSchema from '../validators/requestValidator'

export const createRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = classroomRequestSchema.parse(req.body)

    const newRequest = new ClassroomRequest(validatedData)
    const request = await newRequest.save()

    res
      .status(201)
      .json({ message: 'Request created successfully', request: request })
  } catch (err) {
    next(err)
  }
}

export const getAllRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const requests = await ClassroomRequest.find()
    res.status(200).json(requests)
  } catch (err) {
    next(err)
  }
}

export const updateRequest = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query
    const validatedData = classroomRequestSchema.parse(req.body)
    const request = await ClassroomRequest.findByIdAndUpdate(
      id,
      validatedData,
      { new: true },
    )
    res
      .status(200)
      .json({ message: 'Request updated successfully', request: request })
  } catch (err) {
    next(err)
  }
}

export const deleteResourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query
    await ClassroomRequest.findByIdAndDelete(id)
    res.status(200).json({ message: 'Request deleted successfully' })
  } catch (err) {
    next(err)
  }
}
