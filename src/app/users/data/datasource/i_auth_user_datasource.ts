import { UserCredentialsParams } from "../../domain/entities/params/user_credentials_params";
import { UserTokenJson } from "../../domain/entities/user_token";

export interface IAuthUserDatasource{
    call(params: UserCredentialsParams): Promise<UserTokenJson>;
}