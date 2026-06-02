import { Router } from "express";
import { UserController } from "../controller/UserController.js";
import { ValidateBody } from "../middleware/ValidateBody.js";
import { CreateUserDto } from "../features/User/Commands/CreateUser/CreateUserDto.js";
import { AuthenticateUser } from "../middleware/AuthenticateUserToken.js";

const userRouter = Router()
const userController = new UserController()

userRouter.post("/User", ValidateBody(CreateUserDto), userController.AddUserAsync)
userRouter.get("/User/:UserId")
userRouter.put("/User", AuthenticateUser)
userRouter.delete("/User", AuthenticateUser)

export default userRouter