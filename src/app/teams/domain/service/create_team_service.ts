import { TeamEntityJson } from "../entities/typeorm/team_entity";
import { ICreateTeamService } from "./i_create_team_service";
import { ICreateTeamRepository } from "../repository/i_create_team_repository";

export class CreateTeamService implements ICreateTeamService {
    private readonly repository;
    constructor(repository: ICreateTeamRepository) {
        this.repository = repository
    }
    async call(params: TeamEntityJson): Promise<void> {
        return this.repository.call(params)
    }

}