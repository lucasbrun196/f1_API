import { FastifyReply, FastifyRequest } from "fastify";
import { TeamEntity } from "../domain/entities/team_entity";
import { ITeamService } from "../domain/service/i_team_service";
import { TeamService } from "../domain/service/team_service";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../database/data-source";
import { TeamDataSource } from "../datasource/team_datasource";


export class PostTeamController{
    private teamService: ITeamService

    constructor(){
        const datasourceDb = AppDataSource
        const repo = new TeamDataSource(datasourceDb)
        this.teamService = new TeamService(repo)
    }
    static postTeamController = async (request: FastifyRequest, reply: FastifyReply) => {
        
        const body = request.body as any
        
        const team = new TeamEntity({
            teamName: body.TeamName,
            country: body.Country,
            about: body.About,
            pathImageTeam: body.PathImage
        })


        return reply.code(201).send({message: "created"})
    }
}

