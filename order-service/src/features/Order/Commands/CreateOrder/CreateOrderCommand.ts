import { OrderRepository } from "../../../../repositories/OrderRepository.js";
import type { CreateOrderDto } from "./CreateOrderDto.js";

export class CreateOrderCommand{
    private _orderRepository = new OrderRepository()

    async execute(data: CreateOrderDto){
        return await this._orderRepository.CreateOrder(
            data.UserId,
            data.ProductId,
            data.DateCreated
        )
    }
}