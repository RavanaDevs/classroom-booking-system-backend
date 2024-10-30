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
       res.status(201).json({messsage:'ClassRoom created successfully',class:classRoom})
    } catch (error) {
        next(error)
    }


}
