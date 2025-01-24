import { FastifyReply, FastifyRequest } from "fastify";
import { TeamEntity } from "../domain/entities/team_entity";
import { ITeamService } from "../domain/service/i_team_service";
import { TeamService } from "../domain/service/team_service";
import { AppDataSource } from "../../../database/data-source";
import { TeamDataSource } from "../datasource/team_datasource";


export class PostTeamController{
    private service: ITeamService

    constructor(){
        const db = AppDataSource
        const datasource = new TeamDataSource(db)
        this.service = new TeamService(datasource)
    }
    postTeamController = async (request: FastifyRequest, reply: FastifyReply) => {
        const body = request.body
        //this.service.call(body)
        return reply.code(201).send({message: "created"})
    }
}

