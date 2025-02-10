import { DeleteTeamDataSource } from "../../datasource/delete_team_datasource";
import { IDeleteTeamDataSource } from "../../datasource/i_delete_team_datasource";
import { IDeleteTeamService } from "./i_delete_team_service";

export class DeleteTeamService implements IDeleteTeamService{
    private teamDataSource: IDeleteTeamDataSource
    constructor(teamDataSource: DeleteTeamDataSource){
        this.teamDataSource = teamDataSource
    }
    async call(params: number): Promise<void> {
        await this.teamDataSource.call(params)
    }
}