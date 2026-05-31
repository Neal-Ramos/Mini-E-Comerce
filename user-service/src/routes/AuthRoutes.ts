import { Router } from "express";
import { AuthController } from "../controller/AuthController.js";
import { ValidateBody } from "../middleware/ValidateBody.js";
import { LoginDto } from "../features/Auth/Commands/Login/LoginDto.js";

const authRouter = Router()
const authController = new AuthController()

authRouter.post("Login", ValidateBody(LoginDto), authController.Login)

export default authRouter