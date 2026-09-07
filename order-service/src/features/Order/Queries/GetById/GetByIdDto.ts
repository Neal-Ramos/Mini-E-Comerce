import { IsString } from "class-validator";

export class GetByIdDto{
    @IsString()
    OrderId: string
}