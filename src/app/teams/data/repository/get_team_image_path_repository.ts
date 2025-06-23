import { IGetTeamImagePathDatasource } from "../../datasource/i_get_team_image_path_datasource";
import { IdTeamJson, IdTeamParam } from "../../domain/entities/params/id_team_param";
import { IGetTeamImagePathRepository } from "../../domain/repository/i_get_team_image_path_repository";



export class GetTeamImagePathRepository implements IGetTeamImagePathRepository {

    private readonly datasource;

    constructor(datasource: IGetTeamImagePathDatasource) {
        this.datasource = datasource;
    }
    async call(params: IdTeamJson): Promise<string> {
        const paramId = new IdTeamParam(params);
        return await this.datasource.call(paramId);
    }

}