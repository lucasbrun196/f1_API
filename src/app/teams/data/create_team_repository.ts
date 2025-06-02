import { ICreateTeamDatasource } from "../datasource/i_create_team_datasource";
import { TeamEntity, TeamEntityJson } from "../domain/entities/typeorm/team_entity";
import { ICreateTeamRepository } from "../domain/repository/i_create_team_repository";

export class CreateTeamRepository implements ICreateTeamRepository {
    private readonly datasource;
    constructor(datasource: ICreateTeamDatasource) {
        this.datasource = datasource;
    }
    async call(params: TeamEntityJson): Promise<void> {
        const team: TeamEntity = new TeamEntity(
            params.teamName,
            params.teamCountry,
            params.teamAbout,
            params.teamPathImage
        );
        await this.datasource.call(team);
    }
}