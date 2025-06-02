import { FilterTeamParamsJson } from "../entities/params/filter_team_params";
import { GetTeamEntity } from "../entities/get_team_entity";

export interface IGetTeamService {
    call(params: FilterTeamParamsJson): Promise<GetTeamEntity[]>
}