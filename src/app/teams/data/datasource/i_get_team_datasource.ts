import { FilterTeamParams } from "../../domain/entities/params/filter_team_params";
import { TeamEntity } from "../../domain/entities/typeorm/team_entity";


export interface IGetTeamDatasource {
    call(params: FilterTeamParams): Promise<TeamEntity[]>
}