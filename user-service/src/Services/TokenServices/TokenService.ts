import jwt from "jsonwebtoken"
import type { UserTokenPayload } from "../../Types/UserTokenPayload.js"

export class TokenService{
    private secret: string = process.env.JWT_SECRET as string

    async CreateLoginToken(payload: UserTokenPayload){
        return jwt.sign(payload, this.secret, {expiresIn: '1d'})
    }
}