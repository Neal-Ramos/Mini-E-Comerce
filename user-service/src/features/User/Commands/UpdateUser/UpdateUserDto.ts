import { IsDateString, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class UpdateUserDto{
    @IsString()
    @IsNotEmpty()
    FirstName: string

    @IsOptional()
    MiddleName?: string|null

    @IsString()
    @IsNotEmpty()
    LastName: string

    @IsString()
    @IsNotEmpty()
    ContactNumber: string
    
    @IsDateString()
    BirthDay: string | Date
}