import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
import { GetPHTime } from "../helpers/GetPHTime.js";

export class RefreshTokenRepository{
    private prisma = new PrismaClient({
        adapter: new PrismaPg({connectionString: process.env.DATABASE_URL})
    })
    
    async AddAsync(UserId: string){
        return await this.prisma.refreshToken.create({
            data: {
                ExpiryDate: GetPHTime(),
                DateCreated:  GetPHTime(),
                UserId: UserId
            }
        })
    }
}