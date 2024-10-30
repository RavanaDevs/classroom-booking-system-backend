import { userSchema } from '../validators/userValidator'
import User from '../models/userModel'
import { z } from 'zod'
import { NextFunction, Request, Response } from 'express'

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = userSchema.parse(req.body)

    const newUser = new User(validatedData)
    const user = await newUser.save()

    res.status(201).json({ message: 'User created successfully', user: user })
  } catch (err) {
    next(err)
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
  } catch (err) {
    next(err)
  }
}

export const getAllLectureres = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await User.find({ role: 'lecturer' })
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
}

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query
    const validatedData = userSchema.parse(req.body)
    const user = await User.findByIdAndUpdate(id, validatedData)
    res.status(200).json({ message: 'User updated successfully', user: user })
  } catch (err) {
    next(err)
  }
}
