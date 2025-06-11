import { IDeleteTeamDatasource } from "../datasource/i_delete_team_datasource";
import { DeleteTeamJson, DeleteTeamParams } from "../domain/entities/params/delete_team_params";
import { IDeleteTeamRepository } from "../domain/repository/i_delete_team_repository";

export class DeleteTeamRepository implements IDeleteTeamRepository {
    private readonly datasource;
    constructor(datasource: IDeleteTeamDatasource) {
        this.datasource = datasource;
    }
    async call(params: DeleteTeamJson): Promise<void> {
        const deleteTeam: DeleteTeamParams = new DeleteTeamParams({
            id: params.id,
        })
        return await this.datasource.call(deleteTeam);
    }
}