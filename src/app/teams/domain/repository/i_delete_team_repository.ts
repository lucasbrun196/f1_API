import { DeleteTeamJson } from "../entities/params/delete_team_params";

export interface IDeleteTeamRepository {
    call(params: DeleteTeamJson): Promise<void>;
}