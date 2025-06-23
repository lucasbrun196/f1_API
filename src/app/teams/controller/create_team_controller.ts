import { FastifyReply, FastifyRequest } from "fastify";
import { TeamEntityJson } from "../domain/entities/typeorm/team_entity";
import { AppDataSource } from "../../../database/data-source";
import ErrorResponse from "../../../responses/error";
import { CreateTeamService } from "../domain/service/create_team_service";
import { ICreateTeamService } from "../domain/service/i_create_team_service";
import SuccessResponse from "../../../responses/success";
import { CreateTeamDatasource } from "../datasource/create_team_datasource";
import { CreateTeamRepository } from "../data/repository/create_team_repository";


export class PostTeamController {
    private service: ICreateTeamService

    constructor() {
        const db = AppDataSource
        const datasource = new CreateTeamDatasource(db);
        const repository = new CreateTeamRepository(datasource);
        this.service = new CreateTeamService(repository);
    }
    postTeamController = async (request: FastifyRequest<{ Body: TeamEntityJson }>, reply: FastifyReply) => {
        try {
            const params: TeamEntityJson = request.body;
            await this.service.call(params)
            const s = new SuccessResponse(201, 'Created')
            return reply.code(s.statusCode).send({ message: s.message })
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message })
            } else {
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({ messgae: e.message })
            }

        }

    }
}

