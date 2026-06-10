import dotenv from "dotenv";
dotenv.config()
import Express, { type Response } from "express";

const app = Express();
const port = process.env.PORT!

app.use("/", (res: Response) => {
    res.send(`Running on port ${port}`)
})

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})