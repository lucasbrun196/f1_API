import { DataSource } from "typeorm";
import { IAuthUserDatasource } from "../data/datasource/i_auth_user_datasource";
import { UserCredentialsParams } from "../domain/entities/params/user_credentials_params";
import { UserTokenJson } from "../domain/entities/user_token";
import { UsersEntity } from "../domain/entities/typeorm/users_entity";
import { DatabaseException } from "../../../utils/exceptions/database_exceptions";

export class AuthUserDatasource implements IAuthUserDatasource{

    private readonly db;

    constructor(db: DataSource){
        this.db = db;
    }

    async call(params: UserCredentialsParams): Promise<UserTokenJson> {
        const query = await this.db
        .getRepository(UsersEntity)
        .findOneOrFail({
            where: { email: params.eamil },
            select: [ "id", "email", "username", "admin", "password" ]
        });
        return {
            id: query.id!,
            email: query.email,
            userName: query.username,
            admin: query.admin!,
            password: query.password,
        }
    }
}