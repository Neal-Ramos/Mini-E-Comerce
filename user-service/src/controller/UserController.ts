import type { NextFunction, Request, Response } from "express";
import { CreateUserCommand } from "../features/User/Commands/CreateUser/CreateUserCommand.js";
import { GetUserByUserIdQuery } from "../features/User/Queries/GetUserByUserId/GetUserById.js";
import { UpdateUserCommand } from "../features/User/Commands/UpdateUser/UpdateUserCommand.js";
import { DeleteUserCommand } from "../features/User/Commands/DeleteUser/DeleteUserCommand.js";

export class UserController{
    async AddUserAsync(req: Request, res: Response, next: NextFunction){
        try {
            const data = await new CreateUserCommand().execute(req.body)
            res.status(201).json({message: "User Created", data})
        } catch (error) {
            next(error)
        }
    }
    async GetUserByUserId(req: Request, res: Response, next: NextFunction){
        try {
            const { UserId } = req.params
            const result = await new GetUserByUserIdQuery().execute(UserId.toString())

            res.status(200).json({data: result})
        } catch (error) {
            next(error)
        }
    }
    async UpdateUser(req: Request, res: Response, next: NextFunction){
        try {
            const userId = req.user?.UserId
            if(!userId){
                res.status(401).json({message: "Unauthorized"})
                return
            }

            const result = await new UpdateUserCommand().execute(req.body, userId)
            res.status(200).json({data: result, message: "Account Updated"})
        } catch (error) {
            next(error)
        }
    }
    async DeleteUser(req: Request, res: Response, next: NextFunction){
        try {
            const refreshToken = req.cookies.RefreshToken
            const UserId = req.user?.UserId
            if(!refreshToken || !UserId){
                res.status(401).json({message: "Unauthorized"})
                return
            }
            
            const result = await new DeleteUserCommand().execute(UserId, refreshToken)
            res.clearCookie("RefreshToken")
            res.status(200).json({data: result, message: "Account Deleted"})
        } catch (error) {
            next(error)
        }
    }
}