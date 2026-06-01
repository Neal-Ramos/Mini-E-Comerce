import { GetPHTime } from "../../../../helpers/GetPHTime.js";
import { VerifyHashedString } from "../../../../helpers/VerifyHashedString.js";
import { RefreshTokenRepository } from "../../../../repositories/RefreshTokenRepository.js";
import { UserRepository } from "../../../../repositories/UserRepository.js";
import { TokenService } from "../../../../Services/TokenServices/TokenService.js";
import { CustomError } from "../../../CustomError.js";
import type { LoginDto } from "./LoginDto.js";

export class LoginCommand{
    private _userRepository = new UserRepository()
    private _refreshTokenRepository = new RefreshTokenRepository()
    private _tokenService = new TokenService()

    async execute(data: LoginDto){
        const User = await this._userRepository.GetByEmail(data.Email)
        if(
            !User ||
            !VerifyHashedString(data.Password, User.Password)
        ) throw new CustomError("Email and Password Does not Match", 401)

        const dateNow = GetPHTime()
        const expiresAt = new Date(dateNow)
        expiresAt.setDate(expiresAt.getDate() + 1);
        
        return {
            refreshToken: (await this._refreshTokenRepository.AddAsync(
                User.UserId,
                expiresAt,
                dateNow
            )).Token,
            accessToken: await this._tokenService.CreateLoginToken({UserId: User.UserId})
        }
    }
}