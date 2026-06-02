import type { NextFunction, Request, Response } from "express";
import { VerifyJwt } from "../helpers/VerifyJwt.js";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import type { UserTokenPayload } from "../Types/UserTokenPayload.js";

export function AuthenticateUser(req: Request, res: Response, next: NextFunction){
    try {
        const token = req.headers.authorization?.replace("Bearer ", "")
        if(!token){
            res.status(401).json({message: "No Token"})
            return
        }
        
        const payload = VerifyJwt(token) as UserTokenPayload
        req.user = payload

        next()

    } catch (error) {
        if(error instanceof TokenExpiredError){
            res.status(401).json({message: "Token Expired"})
            return
        }
        if(error instanceof JsonWebTokenError){
            res.status(401).json({message: "Invalid Token"})
            return
        }
        next(error)
    }
}