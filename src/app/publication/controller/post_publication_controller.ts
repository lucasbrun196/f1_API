import { FastifyReply, FastifyRequest } from "fastify";
import { IPostPublicationService } from "../domain/service/i_post_publication_service";
import { PostPublicationService } from "../domain/service/post_publication_service";
import { PostPublicationRepository } from "../data/repository/post_publication_repository";
import { PostPublicationDatasource } from "../datasource/post_publication_datasource";
import { AppDataSource } from "../../../database/data-source";
import ErrorResponse from "../../../responses/error";
import SuccessResponse from "../../../responses/success";
import { PublicationEntityJson } from "../domain/entities/publication_entity";

export class PostPublicationController {

    private readonly service: IPostPublicationService;

    constructor() {
        const datasource = new PostPublicationDatasource(AppDataSource);
        const repository = new PostPublicationRepository(datasource);
        this.service = new PostPublicationService(repository);
    }

    postPublicationController = async (request: FastifyRequest<{ Body: { content: string } }>, reply: FastifyReply) => {
        try {
            const params: PublicationEntityJson = {
                content: request.body.content,
                likesCount: 0,
                id_user_fk: reply.locals.userId
            };

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