import { Schema, model, Document } from 'mongoose'

interface IClass extends Document {
  classRoomName: string
  seatsCount: number
  airCondition: String
  availableResources: {
    _id: string
    name: string
    description: string
  }
}

const classRoomSchema = new Schema<IClass>(
  {
    classRoomName: { type: String, required: true },
    seatsCount: { type: Number, required: true },
    airCondition: { type: String, required: true },
    availableResources: { type: Array },
  },
  { timestamps: true },
)
const ClassRoom = model<IClass>('class', classRoomSchema)
export default ClassRoom
