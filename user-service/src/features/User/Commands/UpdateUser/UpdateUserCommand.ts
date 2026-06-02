import { UserRepository } from "../../../../repositories/UserRepository.js";
import type { UpdateUserDto } from "./UpdateUserDto.js";

export class UpdateUserCommand{
    private _userRepository = new UserRepository()

    async execute(data: UpdateUserDto, UserId: string){
        return await this._userRepository.UpdateUser(UserId, data)
    }
}