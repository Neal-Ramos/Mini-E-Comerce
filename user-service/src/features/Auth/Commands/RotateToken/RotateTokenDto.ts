import { IsString } from "class-validator";

export class RotateTokenDto{
    @IsString()
    UsedRefreshToken: string
}