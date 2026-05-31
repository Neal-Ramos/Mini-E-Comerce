import type { NextFunction, Request, Response } from "express";
import { CreateUserCommand } from "../features/User/Commands/CreateUser/CreateUserCommand.js";

export class UserController{
    async AddUserAsync(req: Request, res: Response, next: NextFunction){
        try {
            const data = await new CreateUserCommand().execute(req.body)
            res.status(201).json({message: "User Created", data})
        } catch (error) {
            next(error)
        }
    }
}