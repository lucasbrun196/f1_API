export interface IPassword {

    hashPassword(): Promise<string>;

    verifyPassword(): Promise<boolean>;

}