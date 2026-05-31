import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, Prisma } from "../generated/prisma/client.js";
import type { CreateUserDto } from "../features/User/Commands/CreateUser/CreateUserDto.js";
import { GetPHTime } from "../helpers/GetPHTime.js";

export class UserRepository {
  private prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
  });

  async AddAsync(data: CreateUserDto, ) {
    return await this.prisma.user.create({data: {
      FirstName: data.FirstName,
      MiddleName: data.MiddleName,
      LastName: data.LastName,
      Email: data.Email,
      Password: data.Password,
      ContactNumber: data.ContactNumber,
      BirthDay: data.BirthDay,
      DateCreated: GetPHTime(),
    }});
  }
  async GetById(UserId: string){
    return await this.prisma.user.findUnique({
      where: {
        UserId: UserId
      }
    })
  }
  async GetByEmail(Email: string){
    return await this.prisma.user.findFirst({
      where:{
        Email: Email
      }
    })
  }
}