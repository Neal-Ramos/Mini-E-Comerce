import { PrismaClient } from "../generated/prisma/index.js";

export class OrderRepository{
    private prisma = new PrismaClient()

    public async CreateOrder(
        UserId: string,
        ProductId: string,
        DateCreated: Date
    ){
        return await this.prisma.order.create({data: {
            UserId: UserId,
            ProductId: ProductId,
            DateCreated: DateCreated
        }})
    }
    public async GetByOrderId(OrderId: string){
        return this.prisma.order.findUnique({
            where: {
                OrderId: OrderId
            }
        })
    }
}