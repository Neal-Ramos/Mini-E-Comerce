import type { Request, Response, NextFunction } from "express"
import { CreateOrderCommand } from "../features/Order/Commands/CreateOrder/CreateOrderCommand.js"
import { GetByIdQuery } from "../features/Order/Queries/GetById/GetByIdQuery.js"

export class OrderController {
    async CreateOrder(req: Request, res: Response, next: NextFunction){
        try {
            const newOrder = new CreateOrderCommand().execute(req.body)
            res.status(201).json({message:"Order Created", data: newOrder})
        } catch (error) {
            next(error)
        }
    }
    async GetByOrderId(req: Request, res: Response, next: NextFunction){
        try {
            const Order = new GetByIdQuery().execute(req.body)
            res.status(200).json({data: Order})
        } catch (error) {
            next(error)
        }
    }
}