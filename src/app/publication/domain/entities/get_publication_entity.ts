import { UsersEntity } from "../../../users/domain/entities/typeorm/users_entity";
import { PublicationEntity } from "./publication_entity";

export class GetPublicationEntity extends PublicationEntity {
    readonly username;
    constructor({
        id,
        content,
        likescount,
        id_user_fk,
        username
    }: GetPublicationEntityJson) {
        super({ id, content, likescount, id_user_fk });
        this.username = username;
    }
}

export type GetPublicationEntityJson = {
    id?: number,
    content: string,
    likescount: number,
    id_user_fk: UsersEntity | number,
    username: string
}