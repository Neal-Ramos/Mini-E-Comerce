import type { Response } from "express";

export function ErrorHandler(err: any, res: Response){
    const status = err.status ?? 500
    const message = err.message ?? "Server Error"
    res.status(status).json(message)
}