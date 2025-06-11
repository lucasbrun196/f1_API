import { DeleteTeamJson } from "../entities/params/delete_team_params";

export interface IDeleteTeamService {
    call(params: DeleteTeamJson): Promise<void>
}