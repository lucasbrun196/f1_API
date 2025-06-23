import { IGetTeamImageDatasource } from "../datasource/i_get_team_image_datasource";
import { IGetTeamImageRepository } from "../domain/repository/i_get_team_image_repository";

export class GetTeamImageRepository implements IGetTeamImageRepository {

    private readonly datasource;

    constructor(datasource: IGetTeamImageDatasource) {
        this.datasource = datasource;
    }

    async call(params: string): Promise<Buffer> {
        return await this.datasource.call(params.concat(".png"));
    }
}