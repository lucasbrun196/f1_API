import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import { FilterTeamParams } from "../domain/entities/params/filter_team_params";

export interface IGetTeamDatasource {
    call(params: FilterTeamParams): Promise<TeamEntity[]>
}