import { UsersEntity } from "../../domain/entities/typeorm/users_entity";

export interface IPostUserDatasource {
    call(params: UsersEntity): Promise<void>;
}