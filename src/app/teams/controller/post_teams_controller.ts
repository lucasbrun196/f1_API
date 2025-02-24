import { FastifyReply, FastifyRequest } from "fastify";
import { TeamEntity } from "../domain/entities/team_entity";
import { AppDataSource } from "../../../database/data-source";
import  ErrorResponse  from "../../../responses/error";
import { CreateTeamService } from "../domain/service/create_team_service";
import { CreateTeamDataSource } from "../datasource/create_team_datasource";
import { ICreateTeamService } from "../domain/service/i_create_team_service";
import SuccessResponse from "../../../responses/success";


export class PostTeamController{
    private service: ICreateTeamService

    constructor(){
        const db = AppDataSource
        const datasource = new CreateTeamDataSource(db)
        this.service = new CreateTeamService(datasource)
    }
    postTeamController = async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const body: any = request.body
            const teamEntity = new TeamEntity(
                body["TeamName"],
                body["Country"],
                body["About"],
                body["PathImage"],
            )
            
            await this.service.call(teamEntity)
            const s = new SuccessResponse(201, 'Created')
            return reply.code(s.statusCode).send({message: s.message})
        }catch(error){
            if(error instanceof ErrorResponse){
                return reply.code(error.statusCode).send({message: error.message})
            }else{
                const e = new ErrorResponse()
                return reply.code(e.statusCode).send({messgae: e.message})
            }
            
        }

    }
}

