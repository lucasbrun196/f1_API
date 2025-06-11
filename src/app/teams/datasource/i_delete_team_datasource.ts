import { DeleteTeamParams } from "../domain/entities/params/delete_team_params";

export interface IDeleteTeamDatasource {
    call(params: DeleteTeamParams): Promise<void>
}