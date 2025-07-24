import { DataSource } from "typeorm";
import { ILikePublicationDatasource } from "../data/datasource/i_like_publication_datasource";
import { PostEntity } from "../domain/entities/typeorm/post_entity";

export class LikePublicationDatasource implements ILikePublicationDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: number, publicationLikesCount: number): Promise<void> {

        await this.db.getRepository(PostEntity).update({ id: params }, { likesCount: publicationLikesCount });
    }
}