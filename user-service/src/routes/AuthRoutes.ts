import { Router } from "express";
import { AuthController } from "../controller/AuthController.js";
import { ValidateBody } from "../middleware/ValidateBody.js";
import { LoginDto } from "../features/Auth/Commands/Login/LoginDto.js";
import { RotateTokenDto } from "../features/Auth/Commands/RotateToken/RotateTokenDto.js";

const authRouter = Router()
const authController = new AuthController()

authRouter.post("/Login", ValidateBody(LoginDto), authController.Login)
authRouter.post("/RotateToken", ValidateBody(RotateTokenDto), authController.RotateToken)

export default authRouter