import { TeamEntity } from "../domain/entities/team_entity";
import { FilterTeamParams } from "../domain/params/filter_team_params";

export interface IGetTeamDataSource{
    call(params: FilterTeamParams): Promise<TeamEntity[]>
}