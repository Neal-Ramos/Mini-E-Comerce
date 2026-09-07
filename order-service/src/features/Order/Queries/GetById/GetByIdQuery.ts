import { OrderRepository } from "../../../../repositories/OrderRepository.js";
import { CustomError } from "../../../CustomError.js";
import type { GetByIdDto } from "./GetByIdDto.js";

export class GetByIdQuery{
    private _orderRepository = new OrderRepository()

    async execute(data: GetByIdDto){
        const Order = await this._orderRepository.GetByOrderId(data.OrderId)
        if(!Order) throw new CustomError("Not Found", 404)
        
        return Order
    }
}