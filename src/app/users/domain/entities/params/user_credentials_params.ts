import ErrorResponse from "../../../../../responses/error";

export class UserCredentialsParams {

    readonly eamil;
    readonly password;

    constructor({
        email,
        password
    } : UserCredentialsJson
    ) {
        if(email == undefined || password == undefined){
            throw new ErrorResponse(400, 'Missing information');
        }
        this.eamil = email;
        this.password = password;
    }

}

export type UserCredentialsJson = {
    email: string | undefined,
    password: string | undefined,
}