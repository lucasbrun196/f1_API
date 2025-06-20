import { IdTeamParam } from "../domain/entities/params/id_team_param";

export interface IDeleteTeamDatasource {
    call(params: IdTeamParam): Promise<void>
}