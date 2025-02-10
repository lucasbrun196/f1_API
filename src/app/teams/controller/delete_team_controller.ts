import { FastifyReply, FastifyRequest } from "fastify"
import { AppDataSource } from "../../../database/data-source"
import { DeleteTeamDataSource } from "../datasource/delete_team_datasource"
import { DeleteTeamService } from "../domain/service/delete_team_service"
import { IDeleteTeamService } from "../domain/service/i_delete_team_service"
import ErrorResponse from "../../../responses/error"
import SuccessResponse from "../../../responses/success"

export class DeleteTeamController{

    private service: IDeleteTeamService
    constructor(){
        const db = AppDataSource
        const datasource = new DeleteTeamDataSource(db)
        this.service = new DeleteTeamService(datasource)
    }

    deleteTeamController = async (request: FastifyRequest<{Params: {id: number}}>, reply: FastifyReply) => {
        try{
            const params: number = request.params.id
            if(isNaN(params) || params === 0){
                throw new ErrorResponse(400, "Id wasn't provided")
            }
            await this.service.call(params)
            const s = new SuccessResponse(200, 'Deleted')
            return reply.code(s.statusCode).send(s.message)
        }catch(error){
            if(error instanceof ErrorResponse){
                return reply.code(error.statusCode).send({message: error.message})
            }else{
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({message: e.message})
            }
        }
    }
}