import { UsersEntity } from "../../../users/domain/entities/typeorm/users_entity";

export class PublicationEntity {

    readonly id;
    readonly content;
    readonly likescount;
    readonly id_user_fk;

    constructor({
        id,
        content,
        likescount,
        id_user_fk,
    }: PublicationEntityJson
    ) {
        this.id = id;
        this.content = content,
            this.likescount = likescount;
        this.id_user_fk = id_user_fk;
    }

}

export type PublicationEntityJson = {
    id?: number,
    content: string,
    likescount: number,
    id_user_fk: UsersEntity | number,

}