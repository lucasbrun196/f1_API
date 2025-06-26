import { compare, genSalt, hash } from "bcryptjs";
import { IPassword } from "./i_hash_password";

export class Password implements IPassword {

    private readonly password;
    private readonly hashedPassword;
    private readonly saltNumber;

    constructor(password: string, hashedPassword?: string) {
        this.password = password;
        this.hashedPassword = hashedPassword;
        this.saltNumber = 10;
    }

    hashPassword = async (): Promise<string> => await hash(this.password, await genSalt(this.saltNumber));

    verifyPassword = async (): Promise<boolean> => await compare(this.hashedPassword!, this.password);

}