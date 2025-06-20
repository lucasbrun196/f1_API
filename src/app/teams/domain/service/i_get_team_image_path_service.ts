import { IdTeamJson } from "../entities/params/id_team_param";

export interface IGetTeamImagePathService {
    call(params: IdTeamJson): Promise<string>;
}