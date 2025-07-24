import { FastifyReply, FastifyRequest } from "fastify";
import { ILikePublicationService } from "../domain/service/i_like_publication_service";
import { LikePublicationService } from "../domain/service/like_publication_service";
import { LikePublicationRepository } from "../data/repository/like_publication_repository";
import { LikePublicationDatasource } from "../datasource/like_publication_datasource";
import { AppDataSource } from "../../../database/data-source";
import ErrorResponse from "../../../responses/error";
import SuccessResponse from "../../../responses/success";
import logger from "../../../utils/logger";
import { IdPublicationData } from "../models_route/id_publication";
import { GetPublicationRepository } from "../data/repository/get_publication_repository";
import { GetPublicationDatasource } from "../datasource/get_publication_datasource";

export class LikePublicationController {

    private readonly service: ILikePublicationService;

    constructor() {
        const datasource = new LikePublicationDatasource(AppDataSource);
        const repository = new LikePublicationRepository(datasource);

        const getPublicationDatasource = new GetPublicationDatasource(AppDataSource);
        const getPublicationRepository = new GetPublicationRepository(getPublicationDatasource);

        this.service = new LikePublicationService(repository, getPublicationRepository);
    }

    likePublicationController = async (request: FastifyRequest<IdPublicationData>, reply: FastifyReply) => {
        try {
            const params: number = request.params.id;
            await this.service.call(params);
            const s = new SuccessResponse();
            return reply.code(s.statusCode).send({});
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            logger(`Internal Server Error (LikePublication): ${error}`);
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}