import { Router } from "express";
import { UserController } from "../controller/UserController.js";
import { ValidateBody } from "../middleware/ValidateBody.js";
import { CreateUserDto } from "../features/User/Commands/CreateUser/CreateUserDto.js";

const userRouter = Router()
const userController = new UserController()

userRouter.post("/user", ValidateBody(CreateUserDto), userController.AddUserAsync)

export default userRouter