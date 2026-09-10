import express, { Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express()
const port = process.env.PORT!

app.get("/", (_, res: Response) => {
    res.send("API Gateway")
})

app.listen(port, () => {
    console.log(`API Gateway running: http://localhost:${port}/`)
})