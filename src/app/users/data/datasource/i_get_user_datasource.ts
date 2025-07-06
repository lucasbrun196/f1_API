import { GetUserJson } from "../../domain/entities/get_user_entity";
import { GetUserParams } from "../../domain/entities/params/get_user_params";
import { UsersEntity } from "../../domain/entities/typeorm/users_entity";

export interface IGetUserDatasource{
    call(params: GetUserParams): Promise<UsersEntity[]>;
}