import { UsersEntityJson } from "../entities/typeorm/users_entity";

export interface IPostUserService {
    call(params: UsersEntityJson): Promise<void>;
}