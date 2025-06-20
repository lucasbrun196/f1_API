
import { IdTeamJson } from "../entities/params/id_team_param";

export interface IDeleteTeamService {
    call(params: IdTeamJson): Promise<void>
}