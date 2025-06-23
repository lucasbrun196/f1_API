import { IGetTeamImageRepository } from "../repository/i_get_team_image_repository";
import { IGetTeamImageService } from "./i_get_team_image_service";

export class GetTeamImageService implements IGetTeamImageService {

    private readonly repository;

    constructor(repository: IGetTeamImageRepository) {
        this.repository = repository;
    }

    async call(params: string): Promise<Buffer> {
        return await this.repository.call(params);
    }
}