import { GetTeamDataSource } from "../../datasource/get_team_datasource";
import { IGetTeamDataSource } from "../../datasource/i_get_team_datasource";
import { TeamEntity } from "../entities/team_entity";
import { FilterTeamParams } from "../params/filter_team_params";
import { IGetTeamService } from "./i_get_team_service";

export class GetTeamService implements IGetTeamService{
    private teamDataSource: IGetTeamDataSource
    constructor(teamDataSource: GetTeamDataSource){
        this.teamDataSource = teamDataSource
    }
    async call(params: FilterTeamParams): Promise<{"data": TeamEntity[]}> {
        
        let teamsList = await this.teamDataSource.call(params).then((e) => e)
        return {
            "data": teamsList
        }
    }

}