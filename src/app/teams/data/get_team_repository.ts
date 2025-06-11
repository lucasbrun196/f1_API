import { IGetTeamDatasource } from "../datasource/i_get_team_datasource";
import { GetTeamEntity } from "../domain/entities/get_team_entity";
import { FilterTeamParams, FilterTeamParamsJson } from "../domain/entities/params/filter_team_params";
import { IGetTeamRepository } from "../domain/repository/i_get_team_repository";

export class GetTeamRepository implements IGetTeamRepository {
    private readonly datasource;
    constructor(datasource: IGetTeamDatasource) {
        this.datasource = datasource;
    }
    async call(params: FilterTeamParamsJson): Promise<GetTeamEntity[]> {
        const filter = new FilterTeamParams({
            name: params.name,
            country: params.country,
        });
        const res = await this.datasource.call(filter);
        return res.map((element) => {
            return new GetTeamEntity({
                teamId: element.id!,
                teamName: element.teamName,
                teamAbout: element.about,
                teamCountry: element.country,
                teamPathImage: element.pathImageTeam,
            })
        })
    }

}