import { Router } from "express";
import { UserController } from "../controller/UserController.js";
import { ValidateBody } from "../middleware/ValidateBody.js";
import { CreateUserDto } from "../features/User/Commands/CreateUser/CreateUserDto.js";
import { AuthenticateUser } from "../middleware/AuthenticateUserToken.js";
import { UpdateUserDto } from "../features/User/Commands/UpdateUser/UpdateUserDto.js";

const userRouter = Router()
const userController = new UserController()

userRouter.post("/User", ValidateBody(CreateUserDto), userController.AddUserAsync)
userRouter.get("/User/:UserId", userController.GetUserByUserId)
userRouter.put("/User", AuthenticateUser, ValidateBody(UpdateUserDto), userController.UpdateUser)
userRouter.delete("/User", AuthenticateUser, userController.DeleteUser)

export default userRouter