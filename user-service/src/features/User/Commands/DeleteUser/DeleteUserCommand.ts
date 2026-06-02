import { RefreshTokenRepository } from "../../../../repositories/RefreshTokenRepository.js";
import { UserRepository } from "../../../../repositories/UserRepository.js";

export class DeleteUserCommand{
    private _userRepository = new UserRepository()
    private _refreshTokenRepository = new RefreshTokenRepository()

    async execute(UserId: string, RefreshToken: string){
        await this._refreshTokenRepository.RevokeToken(RefreshToken)
        return await this._userRepository.DeleteUser(UserId)
    }
}