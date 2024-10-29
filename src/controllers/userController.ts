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
    const user = await newUser.save()
    console.log(user)

    res.status(201).json({ message: 'User created successfully', user: user })
  } catch (error) {
    console.log(error)
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors })
    }
    res.status(500).json({ message: 'Server error' })
  }
}

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (e) {
    console.log('Error while getting users', e)
    res.status(500).json({ message: 'error' })
  }
}
