import { TeamEntity } from "../domain/entities/typeorm/team_entity";

export interface ICreateTeamDatasource {
    call(params: TeamEntity): Promise<void>
}