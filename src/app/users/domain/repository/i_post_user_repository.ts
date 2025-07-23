import { UsersEntityJson } from "../entities/typeorm/users_entity";

export interface IPostUserRepository {
    call(params: UsersEntityJson, hashPassword: string): Promise<void>;
}