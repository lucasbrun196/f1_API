import { TeamEntity } from "../entities/team_entity";

export interface ITeamService{
    call(params: TeamEntity): Promise<void>
}