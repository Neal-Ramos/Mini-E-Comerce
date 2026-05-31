import bcrypt from "bcryptjs";

export function VerifyHashedString(str: string, comparedTo: string){
    return bcrypt.compareSync(str, comparedTo)
}