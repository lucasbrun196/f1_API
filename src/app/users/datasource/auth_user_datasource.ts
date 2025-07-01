import { DataSource } from "typeorm";
import { IAuthUserDatasource } from "../data/datasource/i_auth_user_datasource";
import { UserCredentialsParams } from "../domain/entities/params/user_credentials_params";
import { UserTokenJson } from "../domain/entities/user_token";
import { UsersEntity } from "../domain/entities/typeorm/users_entity";
import ErrorResponse from "../../../responses/error";

export class AuthUserDatasource implements IAuthUserDatasource{

    private readonly db;

    constructor(db: DataSource){
        this.db = db;
    }

    async call(params: UserCredentialsParams): Promise<UserTokenJson> {
        
        const query = await this.db
        .getRepository(UsersEntity)
        .findOneBy({
            email: params.eamil,
        });
        
        if(query == null){
            throw new ErrorResponse(403, 'Invalid credentials');
        }
        return {
            id: query.id!,
            email: query.email,
            admin: query.admin!,
            password: query.password,
        }
    }
}