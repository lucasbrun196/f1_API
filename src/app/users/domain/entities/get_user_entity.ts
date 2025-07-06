
export class GetUserEntity{
    readonly id;
    readonly username;
    readonly id_favorite_team_fk;
    readonly id_favorite_driver_fk;
    readonly country;
    readonly phone;
    readonly admin;

    constructor({
        id,
        username,
        id_favorite_team_fk,
        id_favorite_driver_fk,
        country,
        phone,
        admin,
    } :GetUserJson 
    ) {
        this.id = id;
        this.username = username;
        this.id_favorite_team_fk = id_favorite_team_fk;
        this.id_favorite_driver_fk = id_favorite_driver_fk;
        this.country = country;
        this.phone = phone;
        this.admin = admin;
    }

}


export type GetUserJson = {
    id: number,
    username: string,
    id_favorite_team_fk: number | undefined,
    id_favorite_driver_fk: number | undefined,
    country: string,
    phone: string,
    admin: boolean,
}