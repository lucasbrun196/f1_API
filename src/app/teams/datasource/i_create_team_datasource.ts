import { TeamEntity } from "../domain/entities/team_entity";

export interface ICreateTeamDataSource{
    call(params: TeamEntity): Promise<void>
}