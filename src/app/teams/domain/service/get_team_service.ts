import { FilterTeamParamsJson } from "../entities/params/filter_team_params";
import { IGetTeamService } from "./i_get_team_service";
import { IGetTeamRepository } from "../repository/i_get_team_repository";
import { GetTeamEntity } from "../entities/get_team_entity";

export class GetTeamService implements IGetTeamService {
    private readonly repository;
    constructor(repository: IGetTeamRepository) {
        this.repository = repository
    }
    async call(params: FilterTeamParamsJson): Promise<GetTeamEntity[]> {
        return await this.repository.call(params);
    }

}