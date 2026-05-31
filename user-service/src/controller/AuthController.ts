import type { NextFunction, Request, Response } from "express";
import { LoginCommand } from "../features/Auth/Commands/Login/LoginCommand.js";

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
}