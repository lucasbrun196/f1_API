import { UserCredentialsJson, UserCredentialsParams } from "../../domain/entities/params/user_credentials_params";
import { UserToken } from "../../domain/entities/user_token";
import { IAuthUserRepository } from "../../domain/repository/i_auth_user_repository";
import { IAuthUserDatasource } from "../datasource/i_auth_user_datasource";

export class AuthUserRepository implements IAuthUserRepository{

    private readonly datasource;

    constructor(datasource: IAuthUserDatasource){
        this.datasource = datasource;
    }
    async call(params: UserCredentialsJson): Promise<UserToken> {
        const userCredentialsParams = new UserCredentialsParams(params);
        const userTokenJson = await this.datasource.call(userCredentialsParams);
        return new UserToken(userTokenJson);
    }
}