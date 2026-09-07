import { PrismaClient } from "@prisma/client/scripts/default-index.js"

export class RefreshTokenRepository{
    private prisma = new PrismaClient()
    
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
    async RevokeToken(Token: string){
        return await this.prisma.refreshToken.update({
            where: {
                Token: Token
            },
            data: {
                IsRevoked: true
            }
        })
    }
}