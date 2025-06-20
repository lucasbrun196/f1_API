import { IdTeamParam } from "../domain/entities/params/id_team_param";

export interface IGetTeamImagePathDatasource {
    call(params: IdTeamParam): Promise<string>;
}