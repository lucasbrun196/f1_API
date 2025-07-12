import { UsersEntity } from "../../../users/domain/entities/typeorm/users_entity";

export class PublicationEntity {

    readonly id;
    readonly content;
    readonly likesCount;
    readonly id_user_fk;

    constructor({
        id,
        content,
        likesCount,
        id_user_fk,
    }: PublicationEntityJson
    ) {
        this.id = id;
        this.content = content,
            this.likesCount = likesCount;
        this.id_user_fk = id_user_fk;
    }

}

export type PublicationEntityJson = {
    id?: number,
    content: string,
    likesCount: number,
    id_user_fk: UsersEntity | number,

}