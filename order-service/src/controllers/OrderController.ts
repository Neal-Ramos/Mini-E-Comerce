import type { NextFunction, Request, Response } from "express";
import { OrderRepository } from "../repositories/OrderRepository.js";
import { GetPHTime } from "../helpers/GetPHTime.js";

export class OrderController {
    private orderRepository = new OrderRepository()

    async CreateAsync(req: Request, res: Response, next: NextFunction){
        try {
            const {
                UserId,
                ProductId
            } = req.body

            this.orderRepository.CreateAsync(
                UserId,
                ProductId,
                GetPHTime()
            )
        } catch (error) {
            next(error)
        }
    }
    async GetByOrderId(req: Request, res: Response, next: NextFunction){
        try {
            
        } catch (error) {
            next(error)
        }
    }
}