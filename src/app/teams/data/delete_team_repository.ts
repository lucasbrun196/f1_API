import { IDeleteTeamDatasource } from "../datasource/i_delete_team_datasource";
import { IDeleteTeamRepository } from "../domain/repository/i_delete_team_repository";

export class DeleteTeamRepository implements IDeleteTeamRepository {
    private readonly datasource;
    constructor(datasource: IDeleteTeamDatasource) {
        this.datasource = datasource;
    }
    async call(params: number): Promise<void> {
        return await this.datasource.call(params);
    }
}