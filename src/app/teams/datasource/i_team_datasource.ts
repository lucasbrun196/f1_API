import { TeamEntity } from "../domain/entities/team_entity";

export interface ITeamDataSource{
    call(params: TeamEntity): Promise<void>
}