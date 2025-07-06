import { DataSource, QueryBuilder } from "typeorm";
import { IGetUserDatasource } from "../data/datasource/i_get_user_datasource";
import { GetUserParams } from "../domain/entities/params/get_user_params";
import { UsersEntity } from "../domain/entities/typeorm/users_entity";

export class GetUserDatasource implements IGetUserDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: GetUserParams): Promise<UsersEntity[]> {
        const query = this.db.getRepository(UsersEntity).createQueryBuilder();
        if (!params.admin) {
            query.where({
                id: params.userId
            })
        }
        return await query.getMany();
    }
}