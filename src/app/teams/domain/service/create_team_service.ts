import { ICreateTeamDataSource } from "../../datasource/i_create_team_datasource";
import { CreateTeamDataSource } from "../../datasource/create_team_datasource";
import { TeamEntity } from "../entities/team_entity";
import { ICreateTeamService } from "./i_create_team_service";

export class CreateTeamService implements ICreateTeamService{
    private teamDataSource: ICreateTeamDataSource
    constructor(teamDataSource: CreateTeamDataSource){
        this.teamDataSource = teamDataSource
    }
    async call(params: TeamEntity): Promise<void> {
        return this.teamDataSource.call(params)
    }

}