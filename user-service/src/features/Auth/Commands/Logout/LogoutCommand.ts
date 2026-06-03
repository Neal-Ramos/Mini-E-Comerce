import { RefreshTokenRepository } from "../../../../repositories/RefreshTokenRepository.js";

export class LogoutCommand{
    private _refreshTokenRepository = new RefreshTokenRepository()

    async execute(RefreshToken: string){
        return await this._refreshTokenRepository.RevokeToken(RefreshToken)
    }
}