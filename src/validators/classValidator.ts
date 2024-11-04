import { z } from 'zod'

export const classRoomSchema = z.object({
  classRoomName: z.string(),
  seatsCount: z.number(),
  airCondition: z.string(),
  availableResources: z.array(
    z.object({
      _id: z.string(),
      name: z.string(),
      description: z.string(),
    }),
  ),
})

export default classRoomSchema
