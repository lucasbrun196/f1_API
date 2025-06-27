import ErrorResponse from "../../../../responses/error";
import validateEmail from "../../../../utils/email_validate";
import { UsersEntityJson } from "../entities/typeorm/users_entity";
import { IPostUserRepository } from "../repository/i_post_user_repository";
import { IPostUserService } from "./i_post_user_service";

export class PostUserService implements IPostUserService {

    private readonly repository;

    constructor(repository: IPostUserRepository) {
        this.repository = repository;
    }

    async call(params: UsersEntityJson): Promise<void> {
        const isEmailValid = validateEmail(params.email);
        if (!isEmailValid) throw new ErrorResponse(400, 'Invalid email format');

        return await this.repository.call(params);
    }
}