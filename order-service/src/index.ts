import dotenv from "dotenv";
dotenv.config()
import Express, { type Request, type Response } from "express";
import OrderRouter from "./routes/OrderRoutes.js";
import { ErrorHandler } from "./middleware/ErrorHandler.js";

const app = Express();
const port = process.env.PORT!

app.use("/api", OrderRouter)
app.use("/", (_: Request, res: Response) => {
    res.send("Running!")
})

app.use(ErrorHandler)

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})