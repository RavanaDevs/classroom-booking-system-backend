import { classSchema } from '../validators/classValidator'
import Class from '../models/classModel'
import { NextFunction, Request, Response } from 'express'


export const createClass = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const validatedData = classSchema.parse(req.body)
        const newClass = new Class(validatedData)
        const classRoom = await newClass.save()
       res.status(201).json({messsage:'Class created successfully',class:classRoom})
    } catch (error) {
        next(error)
    }


}
