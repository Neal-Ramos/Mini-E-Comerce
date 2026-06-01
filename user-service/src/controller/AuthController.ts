import type { NextFunction, Request, Response } from "express";
import { LoginCommand } from "../features/Auth/Commands/Login/LoginCommand.js";
import { RotateTokenCommand } from "../features/Auth/Commands/RotateToken/RotateTokenCommand.js";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export class AuthController{
    async Login(req: Request, res: Response, next: NextFunction){
        try {
            const result = await new LoginCommand().execute(req.body)
        
            res.cookie("AccessToken", result.accessToken)
            res.status(200).json({ RefreshToken: result.refreshToken })
        } catch (error) {
            next(error)
        }
    }
    async RotateToken(req: Request, res: Response, next: NextFunction){
        try {
            const accessToken = req.headers.authorization?.replace("Bearer ", "")
            if(!accessToken){
                res.status(401).json({message: "Unauthorize"})
                return
            }
            
            const result = await new RotateTokenCommand().execute(req.body, accessToken)

            res.cookie("AccessToken", result.newAccessToken)
            res.status(200).json({ RefreshToken: result.newRefreshToken })
        } catch (error) {
            if(error instanceof TokenExpiredError){
                res.status(401).json({ message: 'Token expired' })
                return
            }
            if(error instanceof JsonWebTokenError){
                res.status(401).json({ message: 'Invalid token' })
                return
            }
            next(error)
        }
    }
}