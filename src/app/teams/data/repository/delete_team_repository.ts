import { IdTeamJson, IdTeamParam } from "../../domain/entities/params/id_team_param";
import { IDeleteTeamRepository } from "../../domain/repository/i_delete_team_repository";
import { IDeleteTeamDatasource } from "../datasource/i_delete_team_datasource";


export class DeleteTeamRepository implements IDeleteTeamRepository {
    private readonly datasource;
    constructor(datasource: IDeleteTeamDatasource) {
        this.datasource = datasource;
    }
    async call(params: IdTeamJson): Promise<void> {
        const deleteTeam: IdTeamParam = new IdTeamParam({
            id: params.id,
        })
        return await this.datasource.call(deleteTeam);
    }
}