import { FastifyReply, FastifyRequest } from "fastify";
import ErrorResponse from "../../../responses/error";
import { UsersEntityJson } from "../domain/entities/typeorm/users_entity";
import { IPostUserService } from "../domain/service/i_post_user_service";
import { PostUserService } from "../domain/service/post_user_service";
import { PostUserDatasource } from "../datasource/post_user_datasource";
import { PostUserRepository } from "../data/repository/post_user_repository";
import { AppDataSource } from "../../../database/data-source";
import SuccessResponse from "../../../responses/success";
import { Password } from "../../../utils/hash_password/hash_password";

export class PostUserController {

    private readonly service: IPostUserService;

    constructor() {
        const datasource = new PostUserDatasource(AppDataSource);
        const repository = new PostUserRepository(datasource);
        this.service = new PostUserService(repository);
    }

    postUserController = async (request: FastifyRequest<{ Body: UsersEntityJson }>, reply: FastifyReply) => {
        try {
            const params: UsersEntityJson = request.body;
            await this.service.call(params);
            const s = new SuccessResponse(201, 'Created');
            return reply.code(s.statusCode).send({ message: s.message });
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}