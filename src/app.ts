// app.ts
import express, { Application, Request, Response } from 'express'
import bodyParser from 'body-parser'

// Initialize the app
const app: Application = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, welcome to the Node.js backend with TypeScript!')
})

// Export the app
export { app }
