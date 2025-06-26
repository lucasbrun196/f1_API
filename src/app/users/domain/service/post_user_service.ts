import { UsersEntityJson } from "../entities/typeorm/users_entity";
import { IPostUserRepository } from "../repository/i_post_user_repository";
import { IPostUserService } from "./i_post_user_service";

export class PostUserService implements IPostUserService {

    private readonly repository;

    constructor(repository: IPostUserRepository) {
        this.repository = repository;
    }

    async call(params: UsersEntityJson): Promise<void> {

        return await this.repository.call(params);
    }
}