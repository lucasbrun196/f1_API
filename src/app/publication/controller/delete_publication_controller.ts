import { FastifyReply, FastifyRequest } from "fastify";
import { DeletePublicationService } from "../domain/service/delete_publication_service";
import { DeletePublicationRepository } from "../data/repository/delete_publication_repository";
import { DeletePublicationDatasource } from "../datasource/delete_publication_datasource";
import { AppDataSource } from "../../../database/data-source";
import ErrorResponse from "../../../responses/error";
import SuccessResponse from "../../../responses/success";
import { DeletePublicationData } from "../models_route/delete_publication";
import { DeletePublicationParamsJson } from "../domain/entities/params/delete_publication_params";
import { IDeletePublicationService } from "../domain/service/i_delete_publication_service";
import { ValidatePublicationDatasource } from "../datasource/validate_publication_datasource";
import { ValidatePublicationRepository } from "../data/repository/validate_publication_repository";
import logger from "../../../utils/logger";

export class DeletePublicationController {

    private readonly service: IDeletePublicationService;

    constructor() {
        const datasource = new DeletePublicationDatasource(AppDataSource);
        const repository = new DeletePublicationRepository(datasource);
        const validatePublicationDatasource = new ValidatePublicationDatasource(AppDataSource);
        const validatePublicationRepository = new ValidatePublicationRepository(validatePublicationDatasource);
        this.service = new DeletePublicationService(repository, validatePublicationRepository);
    }

    deletePublicationController = async (request: FastifyRequest<DeletePublicationData>, reply: FastifyReply) => {
        try {
            const params: DeletePublicationParamsJson = {
                id: request.params.id as number | string,
                userId: reply.locals.userId as number,
                admin: reply.locals.admin as boolean,
            };

            await this.service.call(params);
            const s = new SuccessResponse(200, 'Deleted');
            return reply.code(s.statusCode).send({ message: s.message });
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message });
            }
            logger(`Internal Server Error (DeletePublicationController): ${error}`);
            const e = new ErrorResponse();
            return reply.code(e.statusCode).send({ message: e.message });
        }
    }
}