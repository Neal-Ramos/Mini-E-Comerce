import type { JwtPayload } from "jsonwebtoken";

export interface UserTokenPayload extends JwtPayload{
    UserId: string
}