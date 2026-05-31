import { IsEmail, IsString } from "class-validator"

export class LoginDto{
    @IsEmail()
    Email: string
    @IsString()
    Password: string
}