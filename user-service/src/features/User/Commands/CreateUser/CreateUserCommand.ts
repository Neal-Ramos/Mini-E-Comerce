import { HashString } from "../../../../helpers/HashString.js";
import { UserRepository } from "../../../../repositories/UserRepository.js";
import { CustomError } from "../../../CustomError.js";
import type { CreateUserDto } from "./CreateUserDto.js";

export class CreateUserCommand{
    private _userRepository = new UserRepository()

    async execute(data: CreateUserDto){
        const isEmailExisting = await this._userRepository.GetByEmail(data.Email)
        if(isEmailExisting)throw new CustomError("Email Already Exist", 409)

        data.Password = HashString(data.Password)
        return await this._userRepository.AddAsync(data)
    }
}