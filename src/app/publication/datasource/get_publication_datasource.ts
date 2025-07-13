import { DataSource } from "typeorm";
import { IGetPublicationDatasource } from "../data/datasource/i_get_publication_datasource";
import { Pagination } from "../../../utils/pagination";
import { GetPublicationEntityJson } from "../domain/entities/get_publication_entity";
import { PostEntity } from "../domain/entities/typeorm/post_entity";
import { UsersEntity } from "../../users/domain/entities/typeorm/users_entity";

export class GetPublicationDatasource implements IGetPublicationDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: Pagination): Promise<GetPublicationEntityJson[]> {
        const query = this.db.getRepository(PostEntity)
            .createQueryBuilder('Post')
            .innerJoin(UsersEntity, 'User', 'User.id = Post.id_user_fk')
            .select([
                "Post.id AS id",
                "Post.content AS content",
                "Post.likesCount AS likescount",
                "Post.id_user_fk AS id_user_fk",
                "User.username AS username"
            ]).orderBy('Post.id', "DESC");

        if (params.page !== undefined && params.pageSize !== undefined) query.limit(params.pageSize).offset(params.getOffset());


        const result = await query.getRawMany() as GetPublicationEntityJson[];
        return result;
    }
}