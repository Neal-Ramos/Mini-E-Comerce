import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import type { NextFunction, Request, Response } from "express";

export function ValidateBody<T extends object>(cls: new () => T){
    return async (req: Request, res: Response, next: NextFunction) => {
        const instance = plainToInstance(cls, req.body)
        const errors = await validate(instance)
        if(errors.length > 0){
            res.status(400).json(errors)
            return
        }

        req.body = instance
        next()
    }
}