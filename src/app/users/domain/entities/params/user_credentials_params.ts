export class UserCredentialsParams {

    readonly eamil;
    readonly password;

    constructor({
        email,
        password
    } : UserCredentialsJson
    ) {
        this.eamil = email;
        this.password = password;
    }

}

export type UserCredentialsJson = {
    email: string,
    password: string,
}