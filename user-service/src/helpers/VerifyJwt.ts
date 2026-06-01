import jwt from 'jsonwebtoken';

export function VerifyJwt(Token: string){
    return jwt.verify(Token, process.env.JWT_SECRET!)
}