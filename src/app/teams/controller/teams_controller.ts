import { FastifyReply, FastifyRequest } from "fastify";
import { TeamEntity } from "../domain/entities/team_entity";
import { ITeamService } from "../domain/service/i_team_service";
import { TeamService } from "../domain/service/team_service";
import { AppDataSource } from "../../../database/data-source";
import { TeamDataSource } from "../datasource/team_datasource";
import  ErrorResponse  from "../../../exceptions/error";


export class PostTeamController{
    private service: ITeamService

    constructor(){
        const db = AppDataSource
        const datasource = new TeamDataSource(db)
        this.service = new TeamService(datasource)
    }
    postTeamController = async (request: FastifyRequest, reply: FastifyReply) => {
        try{
            const body: any = request.body
            const teamEntity = new TeamEntity(
                body["TeamName"] as string,
                body["Country"] as string,
                body["About"] as string,
                body["PathImage"] as string,
            )
            await this.service.call(teamEntity)
            return reply.code(201).send({message: "created"})
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

