import { FastifyReply, FastifyRequest } from "fastify";
import ErrorResponse from "../../../responses/error";
import { GetUserParamsJson } from "../domain/entities/params/get_user_params";
import { IGetUserService } from "../domain/service/i_get_user_service";
import { GetUserService } from "../domain/service/get_user_service";
import { GetUserRepository } from "../data/repository/get_user_repository";
import { GetUserDatasource } from "../datasource/get_user_datasource";
import { AppDataSource } from "../../../database/data-source";
import SuccessResponse from "../../../responses/success";

export class GetUserController {

    private readonly service: IGetUserService;

    constructor() {
        const datasource = new GetUserDatasource(AppDataSource);
        const repository = new GetUserRepository(datasource);
        this.service = new GetUserService(repository);
    }

    getUserController = async (request: FastifyRequest, reply: FastifyReply) => {
        try {
            const params: GetUserParamsJson = {
                userId: reply.locals.userId,
                admin: reply.locals.admin
            };
            const result = await this.service.call(params);
            const s = new SuccessResponse();
            if (result.length === 0) {
                s.statusCode = 204;
                s.message = 'No content';
                return reply.code(s.statusCode).send({ message: s.message });
            }
            return reply.code(s.statusCode).send(result);
        } catch (error) {
            console.log(error);
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}