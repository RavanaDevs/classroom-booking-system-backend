import { userSchema } from '../validators/userValidator'
import User from '../models/userModel'
import { z } from 'zod'
import { NextFunction, Request, Response } from 'express'

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = userSchema.parse(req.body)

    const newUser = new User(validatedData)
    await newUser.save()

    res
      .status(201)
      .json({ message: 'User created successfully', user: newUser })
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors })
    }
    res.status(500).json({ message: 'Server error' })
  }
}
