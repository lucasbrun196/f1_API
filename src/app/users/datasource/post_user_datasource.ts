import { DataSource } from "typeorm";
import { IPostUserDatasource } from "../data/datasource/i_post_user_datasource";
import { UsersEntity } from "../domain/entities/typeorm/users_entity";
import ErrorResponse from "../../../responses/error";
import { DatabaseException } from "../../../utils/exceptions/database_exceptions";

export class PostUserDatasource implements IPostUserDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }
    async call(params: UsersEntity): Promise<void> {
        await this.db.getRepository(UsersEntity).save(params)
            .catch((e) =>
                DatabaseException.error(e)
            );

    }
}