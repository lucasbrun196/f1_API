import { FastifyReply, FastifyRequest } from "fastify"
import { AppDataSource } from "../../../database/data-source"
import { DeleteTeamDatasource } from "../datasource/delete_team_datasource"
import { DeleteTeamService } from "../domain/service/delete_team_service"
import { IDeleteTeamService } from "../domain/service/i_delete_team_service"
import ErrorResponse from "../../../responses/error"
import SuccessResponse from "../../../responses/success"
import { IdTeamJson } from "../domain/entities/params/id_team_param"
import { DeleteTeamRepository } from "../data/repository/delete_team_repository"

export class DeleteTeamController {

    private readonly service: IDeleteTeamService
    constructor() {
        const db = AppDataSource
        const datasource = new DeleteTeamDatasource(db)
        const repository = new DeleteTeamRepository(datasource);
        this.service = new DeleteTeamService(repository);
    }

    deleteTeamController = async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
        try {
            const params: IdTeamJson = request.params;
            await this.service.call(params)
            const s = new SuccessResponse(200, 'Deleted')
            return reply.code(s.statusCode).send({ message: s.message })
        } catch (error) {
            if (error instanceof ErrorResponse) {
                return reply.code(error.statusCode).send({ message: error.message })
            } else {
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({ message: e.message })
            }
        }
    }
}