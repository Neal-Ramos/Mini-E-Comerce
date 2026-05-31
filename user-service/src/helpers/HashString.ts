import bcrypt from "bcryptjs";

export function HashString(str: string){
    return bcrypt.hashSync(str, 10)
}