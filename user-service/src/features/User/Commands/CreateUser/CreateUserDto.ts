import { IsString, IsEmail, IsOptional, IsDateString, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    FirstName: string;

    @IsOptional()
    MiddleName?: string | null | undefined;

    @IsString()
    @IsNotEmpty()
    LastName: string;

    @IsEmail()
    Email: string;

    @IsString()
    @IsNotEmpty()
    Password: string;

    @IsString()
    @IsNotEmpty()
    ContactNumber: string;

    @IsDateString()
    BirthDay: string | Date;
}