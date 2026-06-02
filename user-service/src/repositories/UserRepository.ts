import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import type { CreateUserDto } from "../features/User/Commands/CreateUser/CreateUserDto.js";
import { GetPHTime } from "../helpers/GetPHTime.js";
import { UserSafeSelect } from "../selects/UserSafeSelects.js";
import type { UpdateUserDto } from "../features/User/Commands/UpdateUser/UpdateUserDto.js";

export class UserRepository {
  private prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
  });

  async AddAsync(data: CreateUserDto, ) {
    return await this.prisma.user.create({
      data: {
        ...data,
        DateCreated: GetPHTime(),
      },
      select: UserSafeSelect
    });
  }
  async GetById(UserId: string){
    return await this.prisma.user.findUnique({
      where: {
        UserId: UserId
      },
      select: UserSafeSelect
    })
  }
  async GetByEmail(Email: string){
    return await this.prisma.user.findFirst({
      where:{
        Email: Email
      },
      select: UserSafeSelect
    })
  }
  async UpdateUser(UserId: string, data: UpdateUserDto){
    return await this.prisma.user.update({
      where: {
        UserId: UserId
      },
      data: data,
      select: UserSafeSelect
    })
  }
  async DeleteUser(UserId: string){
    return this.prisma.user.delete({
      where: {
        UserId: UserId
      },
      select: UserSafeSelect
    })
  }
}