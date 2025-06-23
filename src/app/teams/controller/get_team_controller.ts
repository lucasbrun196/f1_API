import { FastifyReply, FastifyRequest } from "fastify"
import ErrorResponse from "../../../responses/error"
import { FilterTeamParams, FilterTeamParamsJson } from "../domain/entities/params/filter_team_params"
import { IGetTeamService } from "../domain/service/i_get_team_service"
import { GetTeamService } from "../domain/service/get_team_service"
import { AppDataSource } from "../../../database/data-source"
import SuccessResponse from "../../../responses/success"
import { GetTeamDatasource } from "../datasource/get_team_datasource"
import { GetTeamRepository } from "../data/repository/get_team_repository"

export class GetTeamController {

    private service: IGetTeamService

    constructor() {
        const db = AppDataSource
        const datasource = new GetTeamDatasource(db)
        const repository = new GetTeamRepository(datasource)
        this.service = new GetTeamService(repository)
    }

    getTeamController = async (request: FastifyRequest<{ Querystring: FilterTeamParamsJson }>, reply: FastifyReply) => {
        try {
            const params = new FilterTeamParams({
                name: request.query.name,
                country: request.query.country,
            })
            const teams = await this.service.call(params)
            const s = new SuccessResponse()
            if (teams.length === 0) {
                s.statusCode = 204
                return reply.code(s.statusCode).send();
            }
            return reply.code(s.statusCode).send(teams)

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