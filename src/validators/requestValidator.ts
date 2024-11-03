import { z } from 'zod'

export const classroomRequestSchema = z.object({
  classroom: z.string(),
  lecturer: z.string(),
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
})

export default classroomRequestSchema
