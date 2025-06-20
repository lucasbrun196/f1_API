import { IdTeamJson } from "../entities/params/id_team_param";
import { IGetTeamImagePathRepository } from "../repository/i_get_team_image_path_repository";
import { IGetTeamImagePathService } from "./i_get_team_image_path_service";

export class GetTeamImagePathService implements IGetTeamImagePathService {

    private readonly repository;
    constructor(repository: IGetTeamImagePathRepository) {
        this.repository = repository;
    }
    async call(params: IdTeamJson): Promise<string> {
        return await this.repository.call(params);
    }
}