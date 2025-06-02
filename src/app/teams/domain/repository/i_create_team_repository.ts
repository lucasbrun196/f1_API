import { TeamEntityJson } from "../entities/typeorm/team_entity";

export interface ICreateTeamRepository {
    call(params: TeamEntityJson): Promise<void>;
}