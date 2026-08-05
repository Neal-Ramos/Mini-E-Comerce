import { Router } from "express";

const OrderRouter = Router()

OrderRouter.post("/Order", () => {return 0})
OrderRouter.get("/Order/:OrderId", () => {return 0})

export default OrderRouter