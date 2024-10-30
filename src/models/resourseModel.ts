import { Schema, model, Document } from 'mongoose'

interface Iresourse extends Document {
  name: string
  description: string
}

const resourseSchema = new Schema<Iresourse>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true },
)

const Resourse = model<Iresourse>('resourse', resourseSchema)

export default Resourse
