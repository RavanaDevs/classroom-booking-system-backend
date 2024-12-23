import { resourseSchema } from '../validators/resourseValidator'
import Resourse from '../models/resourseModel'
import { z } from 'zod'
import { NextFunction, Request, Response } from 'express'

export const createResourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = resourseSchema.parse(req.body)

    const newResourse = new Resourse(validatedData)
    const resourse = await newResourse.save()

    res.status(201).json({ message: 'Resource created successfully', resourse: resourse })
  } catch (err) {
    next(err)
  }
}

export const getAllResourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const resourses = await Resourse.find()
    res.status(200).json(resourses)
  } catch (err) {
    next(err)
  }
}

export const updateResourse = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query
    const validatedData = resourseSchema.parse(req.body)
    const resourse = await Resourse.findByIdAndUpdate(id, validatedData, { new: true })
    res.status(200).json({ message: 'Resource updated successfully', resourse: resourse })
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
    await Resourse.findByIdAndDelete(id) 
    res.status(200).json({ message: 'Resource deleted successfully' })
  } catch (err) {
    next(err)
  }
}