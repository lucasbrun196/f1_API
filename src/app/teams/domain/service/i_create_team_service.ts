import { TeamEntityJson } from "../entities/typeorm/team_entity";


export interface ICreateTeamService {
    call(params: TeamEntityJson): Promise<void>
}