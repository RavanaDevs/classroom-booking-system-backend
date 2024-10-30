import{reservationSchema} from '../validators/reservationValidator';
import Reservation from '../models/reservationModel';
import { z } from 'zod'
import { NextFunction, Request, Response } from 'express'

export const createReservation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = reservationSchema.parse(req.body)

    const newReservation = new Reservation(validatedData)
    const reservation = await newReservation.save()

    res.status(201).json({ message: 'Reservation created successfully', reservation: reservation })
  } catch (err) {
    next(err)
  }
}
