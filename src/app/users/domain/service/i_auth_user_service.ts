import { UserCredentialsJson } from "../entities/params/user_credentials_params";

export interface IAuthUserService {
    call(params: UserCredentialsJson): Promise<string>;
}