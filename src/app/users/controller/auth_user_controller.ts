import { FastifyReply, FastifyRequest } from "fastify";
import ErrorResponse from "../../../responses/error";
import { IAuthUserService } from "../domain/service/i_auth_user_service";
import { AuthUserService } from "../domain/service/auth_user_service";
import { AuthUserDatasource } from "../datasource/auth_user_datasource";
import { AppDataSource } from "../../../database/data-source";
import { AuthUserRepository } from "../data/repository/auth_user_repository";
import { UserCredentialsJson } from "../domain/entities/params/user_credentials_params";
import SuccessResponse from "../../../responses/success";
import logger from "../../../utils/logger";

export class AuthUserController {

    private readonly service: IAuthUserService;

    constructor() {
        const datasource = new AuthUserDatasource(AppDataSource);
        const repository = new AuthUserRepository(datasource)
        this.service = new AuthUserService(repository);
    }

    authUserController = async (request: FastifyRequest<{ Headers: UserCredentialsJson }>, reply: FastifyReply) => {
        try {
            const params = request.headers;
            const result = await this.service.call(params);
            const s = new SuccessResponse(200, result);
            return reply.code(s.statusCode).send({ access_token: s.message });
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            logger(`Internal Server Error (AuthUserController): ${error}`);
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}