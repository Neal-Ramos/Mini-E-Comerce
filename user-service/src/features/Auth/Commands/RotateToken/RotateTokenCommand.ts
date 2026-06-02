import { GetPHTime } from "../../../../helpers/GetPHTime.js";
import { RefreshTokenRepository } from "../../../../repositories/RefreshTokenRepository.js";
import { TokenService } from "../../../../Services/TokenServices/TokenService.js";
import { CustomError } from "../../../CustomError.js";
import type { RotateTokenDto } from "./RotateTokenDto.js";
import {v4 as uuid} from 'uuid';

export class RotateTokenCommand{
    private _tokenService = new TokenService()
    private _refreshTokenRepository = new RefreshTokenRepository()

    async execute(UsedRefreshToken: string, UsedAccessToken: string, UserId: string){
        const usedRefreshToken = this._refreshTokenRepository.GetByToken(UsedRefreshToken)
        if(!usedRefreshToken) throw new CustomError("Invalid RefreshToken", 401)
        
        const dateNow = GetPHTime()
        const expiresAt = new Date(dateNow)
        expiresAt.setDate(expiresAt.getDate() + 1)
        
        return{
            newAccessToken : await this._tokenService.CreateLoginToken({UserId: UserId}),
            newRefreshToken : await this._refreshTokenRepository.RenewToken(
                UsedAccessToken,
                uuid(),
                expiresAt
            )
        }
    }
}