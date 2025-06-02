import { GetTeamEntity } from "../entities/get_team_entity";
import { FilterTeamParamsJson } from "../entities/params/filter_team_params";

export interface IGetTeamRepository {
    call(params: FilterTeamParamsJson): Promise<GetTeamEntity[]>;
}