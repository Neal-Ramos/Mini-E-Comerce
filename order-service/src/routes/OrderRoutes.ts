import { Router } from "express";
import { ValidateBody } from "../middleware/ValidateBody.js";
import { CreateOrderDto } from "../features/Order/Commands/CreateOrder/CreateOrderDto.js";
import { GetByIdDto } from "../features/Order/Queries/GetById/GetByIdDto.js";
import { OrderController } from "../controllers/OrderController.js";

const OrderRouter = Router()
const orderController = new OrderController()

OrderRouter.post("/Order", ValidateBody(CreateOrderDto), orderController.CreateOrder)
OrderRouter.get("/Order/:OrderId", ValidateBody(GetByIdDto), orderController.GetByOrderId)

export default OrderRouter