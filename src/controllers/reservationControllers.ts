import { reservationSchema } from '../validators/reservationValidator'
import Reservation from '../models/reservationModel'
import { z } from 'zod'
import { NextFunction, Request, Response, RequestHandler } from 'express'
import exp from 'constants'

export const createReservation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validatedData = reservationSchema.parse(req.body)

    const newReservation = new Reservation(validatedData)
    const reservation = await newReservation.save()

    res.status(201).json({
      message: 'Reservation created successfully',
      reservation: reservation,
    })
  } catch (err) {
    next(err)
  }
}

export const getAllReservations = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const reservations = await Reservation.find()
    res.status(200).json(reservations)
  } catch (err) {
    next(err)
  }
}

export const updateReservation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query
    const validatedData = reservationSchema.parse(req.body)

    const reservation = await Reservation.findByIdAndUpdate(id, validatedData, {
      new: true,
    })

    if (!reservation) {
      res.status(404).json({ message: 'Reservation not found' })
    }

    res
      .status(200)
      .json({ message: 'Reservation updated successfully', reservation })
  } catch (err) {
    next(err)
  }
}

export const deleteReservation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.query

    const reservation = await Reservation.findByIdAndDelete(id)

    if (!reservation) {
      res.status(404).json({ message: 'Reservation not found' })
    }

    res.status(200).json({ message: 'Reservation deleted successfully' })
  } catch (err) {
    next(err)
  }
}
