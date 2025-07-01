export class UserToken{
    readonly id;
    readonly email;
    readonly admin;
    readonly password;

    constructor({
        id,
        email,
        admin,
        password
    } : UserTokenJson,
        
    ) {
        this.id = id;
        this.email = email;
        if (typeof admin == 'number'){
            admin = admin == 1 ? true : false;
        }
        this.admin = admin,
        this.password = password
    };
}

export type UserTokenJson = {
    id: number;
    email: string,
    admin: boolean | number;
    password: string,
}