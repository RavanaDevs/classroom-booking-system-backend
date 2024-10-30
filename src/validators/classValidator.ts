import { z } from 'zod'

export const classRoomSchema = z.object({
    classRoomName: z.string(),
    seatsCount: z.number(),
    airCondition: z.string(),
  
})

export default classRoomSchema
