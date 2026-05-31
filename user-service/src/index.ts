import 'reflect-metadata'
import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routes/UserRoutes.js';
import { ErrorHandler } from './middleware/ErrorHandler.js';
import authRouter from './routes/AuthRoutes.js';
dotenv.config();

const app = express()
app.use(express.json())

const port = process.env.PORT!

app.use("/api", userRouter)
app.use("/api", authRouter)

app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`App Running on port http://localhost:${port}/`)
})