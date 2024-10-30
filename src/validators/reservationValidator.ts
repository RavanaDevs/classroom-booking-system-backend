import { z } from 'zod'

export const reservationSchema = z.object({
    classroom: z.string(),
    year: z.string(),
    subjectName: z.string(),
    courseCode: z.string(),
    date: z.string(),
    startTime: z.string(),
    endTime: z.string(),
    scheduleRecurrently: z.boolean(),
    endDate: z.string(),
    lecturer: z.string(),
})

export default reservationSchema