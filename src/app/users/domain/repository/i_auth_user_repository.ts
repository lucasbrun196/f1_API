import { UserCredentialsJson } from "../entities/params/user_credentials_params";
import { UserToken } from "../entities/user_token";

export interface IAuthUserRepository{
    call(params: UserCredentialsJson): Promise<UserToken>;
}