import { Schema, model, Document } from 'mongoose'

interface IClassroomRequest extends Document {
  classroom: string;
  lecturer: string;
  date: string;
  startTime: string;
  endTime: string;
}

const classroomRequestSchema = new Schema<IClassroomRequest>(
  {
    classroom:{type: String, required: true},
    lecturer: {type: String, required: true},
    date: {type: String, required: true},
    startTime: {type: String, required: true},
    endTime: {type: String, required: true},
  },
  { timestamps: true },
)

const ClassroomRequest = model<IClassroomRequest>('classroom-request', classroomRequestSchema)

export default ClassroomRequest
