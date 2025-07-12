import { DataSource } from "typeorm";
import { IPostPublicationDatasource } from "../data/datasource/i_post_publication_datasource";
import { PostEntity } from "../domain/entities/typeorm/post_entity";

export class PostPublicationDatasource implements IPostPublicationDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: PostEntity): Promise<void> {
        await this.db.getRepository(PostEntity).save(params);
    }
}