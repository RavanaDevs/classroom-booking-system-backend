import { classRoomSchema } from '../validators/classValidator'
import ClassRoom from '../models/classModel'
import { NextFunction, Request, Response } from 'express'

export const createClassRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = classRoomSchema.parse(req.body)
    const newClass = new ClassRoom(validatedData)
    const classRoom = await newClass.save()
    res
      .status(201)
      .json({ messsage: 'ClassRoom created successfully', class: classRoom })
  } catch (error) {
    next(error)
  }
}

export const getAllClassRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const classRoom = await ClassRoom.find()
    res.status(200).json(classRoom)
  } catch (error) {
    next(error)
  }
}

export const updateClassRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.query

    
    const validatedData = classRoomSchema.parse(req.body)

    
    const updatedClassRoom = await ClassRoom.findByIdAndUpdate(
      id,
      validatedData,
      { new: true, runValidators: true } 
    )

    if (!updatedClassRoom) {
      res.status(404).json({ message: 'ClassRoom not found' })
      return
    }

    res.status(200).json({
      message: 'ClassRoom updated successfully',
      class: updatedClassRoom,
    })
  } catch (error) {
    next(error)
  }
}


export const deleteClassRoom = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { id } = req.query

    
    const deletedClassRoom = await ClassRoom.findByIdAndDelete(id)

    if (!deletedClassRoom) {
      res.status(404).json({ message: 'ClassRoom not found' })
      return
    }

    res.status(200).json({ message: 'ClassRoom deleted successfully' })
  } catch (error) {
    next(error)
  }
}