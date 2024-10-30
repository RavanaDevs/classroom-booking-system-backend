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
