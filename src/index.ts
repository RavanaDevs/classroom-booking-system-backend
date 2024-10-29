import "dotenv/config"
import { app } from './app'
import connectDB from './lib/database'

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server is running on http://localhost:${PORT}`)
})
