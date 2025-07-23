import { FastifyReply, FastifyRequest } from "fastify";
import { IGetPublicationService } from "../domain/service/i_get_publication_service";
import { GetPublicationService } from "../domain/service/get_publication_service";
import { GetPublicationRepository } from "../data/repository/get_publication_repository";
import { GetPublicationDatasource } from "../datasource/get_publication_datasource";
import { AppDataSource } from "../../../database/data-source";
import ErrorResponse from "../../../responses/error";
import SuccessResponse from "../../../responses/success";
import { PaginationJson } from "../../../utils/pagination";
import logger from "../../../utils/logger";

export class GetPublicationController {

    private readonly service: IGetPublicationService;

    constructor() {
        const datasource = new GetPublicationDatasource(AppDataSource);
        const repository = new GetPublicationRepository(datasource);
        this.service = new GetPublicationService(repository);
    }

    getPublicationController = async (request: FastifyRequest<{ Querystring: PaginationJson }>, reply: FastifyReply) => {
        try {
            const params: PaginationJson = request.query;
            const result = await this.service.call(params);
            const s = new SuccessResponse();
            return reply.code(s.statusCode).send(result);
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            logger(`Internal Server Error (GetPublicationController): ${error}`);
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}