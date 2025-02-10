import { FastifyReply, FastifyRequest } from "fastify"
import ErrorResponse from "../../../responses/error"
import { FilterTeamParams } from "../domain/params/filter_team_params"
import { IGetTeamService } from "../domain/service/i_get_team_service"
import { GetTeamService } from "../domain/service/get_team_service"
import { DataSource } from "typeorm"
import { AppDataSource } from "../../../database/data-source"
import { GetTeamDataSource } from "../datasource/get_team_datasource"
import SuccessResponse from "../../../responses/success"

export class GetTeamController {

    private service: IGetTeamService

    constructor(){
        const db = AppDataSource
        const datasource = new GetTeamDataSource(db)
        this.service = new GetTeamService(datasource)
    }

    getTeamController = async (request: FastifyRequest<{Querystring: FilterTeamParams}>, reply: FastifyReply) => {
        try{
            const params = new FilterTeamParams(request.query.name, request.query.country)
            const teams = await this.service.call(params)
            const s = new SuccessResponse()
            if(teams.data.length === 0){
                s.message = "No Content"
                s.statusCode = 204
                return reply.code(s.statusCode).send({message: s.message})
            }
            return reply.code(s.statusCode).send(teams)
            
        }catch(error){
            if(error instanceof ErrorResponse){
                return reply.code(error.statusCode).send({message: error.message})
            }else {
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({message: e.message})
            }
        }
    }
}