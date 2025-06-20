import { IdTeamJson } from "../entities/params/id_team_param";


export interface IDeleteTeamRepository {
    call(params: IdTeamJson): Promise<void>;
}