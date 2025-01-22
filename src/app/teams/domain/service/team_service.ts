import { ITeamDataSource } from "../../datasource/i_team_datasource";
import { TeamDataSource } from "../../datasource/team_datasource";
import { TeamEntity } from "../entities/team_entity";
import { ITeamService } from "./i_team_service";

export class TeamService implements ITeamService{
    private teamDataSource: ITeamDataSource
    constructor(teamDataSource: TeamDataSource){
        this.teamDataSource = teamDataSource
    }
    async call(params: TeamEntity): Promise<void> {
        return this.teamDataSource.call(params)
    }

}