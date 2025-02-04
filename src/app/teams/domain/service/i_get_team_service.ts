import { TeamEntity } from "../entities/team_entity";
import { FilterTeamParams } from "../params/filter_team_params";

export interface IGetTeamService{
    call(params: FilterTeamParams): Promise<{"data": TeamEntity[]}>
}