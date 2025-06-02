import { IGetDriverDatasource } from "../datasource/i_get_driver_datasource";
import { GetDriverEntity } from "../domain/entities/get_driver_entity";
import { FilterDriverParams, FilterDriverParamsJson } from "../domain/entities/params/filter_driver_params";
import { IGetDriverRepository } from "../domain/repository/i_get_driver_repository";

export class GetDriverRepository implements IGetDriverRepository {
    private readonly datasource;
    constructor(datasource: IGetDriverDatasource) {
        this.datasource = datasource;
    }
    async call(params: FilterDriverParamsJson): Promise<GetDriverEntity[]> {
        const filter = new FilterDriverParams({
            teamId: params.teamId,
            driverName: params.driverName,
            isGetTeam: params.isGetTeam
        })
        const res = await this.datasource.call(filter);
        return res.map((element) => new GetDriverEntity({
            driverId: element.id!,
            driverName: element.driverName,
            driverBirthday: element.birthday,
            driverNationality: element.nationality,
            driverPathImage: element.pathImageDriver,
            driverTitleCount: element.titleCount,
            driverTeam:
                filter.isGetTeam === true ?
                    {
                        teamId: element.team!.id,
                        teamName: element.team!.teamName,
                        teamAbout: element.team!.about,
                        teamCountry: element.team!.country,
                        teamPathImage: element.team!.pathImageTeam,
                    }
                    : undefined,
        }))

    }
}