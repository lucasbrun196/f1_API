export class GetUserParams{
    readonly userId;
    readonly admin;

    constructor({
        userId,
        admin,
    }: GetUserParamsJson
    ){
        this.userId = userId;
        this.admin = admin;
    }
}

export type GetUserParamsJson = {
    userId: number,
    admin: boolean,
}