import { DataSource } from "typeorm";
import { IDeletePublicationDatasource } from "../data/datasource/i_delete_publication_datasource";
import { DeletePublicationParams } from "../domain/entities/params/delete_publication_params";
import { PublicationEntity } from "../domain/entities/publication_entity";
import { PostEntity } from "../domain/entities/typeorm/post_entity";

export class DeletePublicationDatasource implements IDeletePublicationDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: DeletePublicationParams): Promise<void> {
        await this.db.getRepository(PostEntity).delete({ id: params.id });
    }
}