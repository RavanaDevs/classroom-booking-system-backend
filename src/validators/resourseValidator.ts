import { z } from 'zod'

export const resourseSchema = z.object({
  name: z.string(),
  description: z.string(),

})

export default resourseSchema
