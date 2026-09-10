import express, { Response } from "express";
import dotenv from "dotenv";
import { ConnectProducer } from "./kafka";
await ConnectProducer()
dotenv.config();

const app = express()
const port = process.env.PORT!

app.get("/", (_, res: Response) => {
    res.send("API Gateway")
})

app.listen(port, () => {
    console.log(`API Gateway running: http://localhost:${port}/`)
})