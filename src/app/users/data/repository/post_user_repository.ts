import { Password } from "../../../../utils/hash_password/hash_password";
import { IPassword } from "../../../../utils/hash_password/i_hash_password";
import { UsersEntity, UsersEntityJson } from "../../domain/entities/typeorm/users_entity";
import { IPostUserRepository } from "../../domain/repository/i_post_user_repository";
import { IPostUserDatasource } from "../datasource/i_post_user_datasource";

export class PostUserRepository implements IPostUserRepository {

    private readonly datasource;

    constructor(datasource: IPostUserDatasource) {
        this.datasource = datasource;
    }

    async call(params: UsersEntityJson): Promise<void> {
        const password: IPassword = new Password(params.password);
        const hashPassword: string = await password.hashPassword();
        params.password = hashPassword;
        const userEntityParams = new UsersEntity(params);
        return await this.datasource.call(userEntityParams);
    }
}