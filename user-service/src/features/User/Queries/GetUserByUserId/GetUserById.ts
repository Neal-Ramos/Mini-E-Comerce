import { UserRepository } from "../../../../repositories/UserRepository.js";
import { CustomError } from "../../../CustomError.js";

export class GetUserByUserIdQuery{
    private _userRepository = new UserRepository()

    async execute(UserId: string){
        const User = await this._userRepository.GetById(UserId)
        if(!User) throw new CustomError("User Not Found", 404)

        return User
    }
}