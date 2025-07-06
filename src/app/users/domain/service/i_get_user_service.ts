import { GetUserEntity } from "../entities/get_user_entity";
import { GetUserParamsJson } from "../entities/params/get_user_params";

export interface IGetUserService {
    call(params: GetUserParamsJson): Promise<GetUserEntity[]>;
}