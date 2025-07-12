import { UsersEntity } from "../../../users/domain/entities/typeorm/users_entity";
import { PublicationEntityJson } from "../../domain/entities/publication_entity";
import { PostEntity } from "../../domain/entities/typeorm/post_entity";
import { IPostPublicationRepository } from "../../domain/repository/i_post_publication_repository";
import { IPostPublicationDatasource } from "../datasource/i_post_publication_datasource";

export class PostPublicationRepository implements IPostPublicationRepository {

    private readonly datasource;

    constructor(datasource: IPostPublicationDatasource) {
        this.datasource = datasource;
    }

    async call(params: PublicationEntityJson): Promise<void> {
        const postEntityParam = new PostEntity(
            params.content,
            params.likesCount,
            params.id_user_fk as UsersEntity,
            params.id,
        );
        return this.datasource.call(postEntityParam);
    }
}