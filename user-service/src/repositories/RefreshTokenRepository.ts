import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

export class RefreshTokenRepository{
    private prisma = new PrismaClient({
        adapter: new PrismaPg({connectionString: process.env.DATABASE_URL})
    })
    
    async AddAsync(UserId: string, ExpiryDate: Date, DateCreated: Date){
        return await this.prisma.refreshToken.create({
            data: {
                ExpiryDate: ExpiryDate,
                DateCreated:  DateCreated,
                UserId: UserId
            }
        })
    }
    async GetByToken(Token: string){
        return await this.prisma.refreshToken.findUnique({
            where: {
                Token: Token
            }
        })
    }
    async RenewToken(Token: string, NewToken: string, ExpiryDate: Date){
        return await this.prisma.refreshToken.update({
            where:{
                ExpiryDate: ExpiryDate,
                Token: Token
            },
            data:{
                Token: NewToken

            }
        })
    }
}