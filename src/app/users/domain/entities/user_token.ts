export class UserToken{
    readonly id;
    readonly email;
    readonly userName;
    readonly admin;
    readonly password;

    constructor({
        id,
        email,
        userName,
        admin,
        password
    } : UserTokenJson,
        
    ) {
        this.id = id;
        this.email = email;
        this.userName = userName;
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
    userName: string,
    admin: boolean | number;
    password: string,
}