import { z } from 'zod'

export const classSchema = z.object({
    classRoomName: z.string(),
    seatsCount: z.number(),
    airCondition: z.string(),
  
})

export default classSchema
