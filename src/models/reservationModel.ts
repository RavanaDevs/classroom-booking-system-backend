import { Schema, model, Document } from 'mongoose'
import { boolean } from 'zod'

interface IReservation extends Document {
  classroom: string
  year: string
  subjectName: string
  courseCode: string
  date: string
  startTime: string
  endTime: string
  scheduleRecurrently: boolean
  endDate: string
  lecturer: string
}

const reservationSchema = new Schema<IReservation>(
  {
    classroom: { type: String, required: true },
    year: { type: String, required: true },
    subjectName: { type: String, required: true, unique: true },
    courseCode: { type: String , required: true , unique: true},
    date: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    scheduleRecurrently: { type:Boolean, required: true },
    endDate: { type: String, required: true },
    lecturer: { type: String, required: true },

  },
  { timestamps: true },
)

const Reservation = model<IReservation>('reservation', reservationSchema)

export default Reservation