import { IsDate, IsString } from "class-validator"

export class CreateOrderDto{
    @IsString()
    UserId: string

    @IsString()
    ProductId: string

    @IsDate()
    DateCreated: Date
}