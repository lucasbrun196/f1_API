import { IGetDriverDataSource } from "../datasource/i_get_driver_datasource";
import { DriverEntity } from "../domain/entities/driver_entity";
import { GetDriverEntity } from "../domain/entities/get_driver_entity";
import { FilterDriverParams } from "../domain/params/filter_driver_params";
import { IGetDriverRepository } from "../domain/repository/i_get_driver_repository";

export class GetDriverRepository implements IGetDriverRepository {
    private readonly datasource;
    constructor(datasource: IGetDriverDataSource) {
        this.datasource = datasource;
    }
    async call(params: FilterDriverParams): Promise<GetDriverEntity[]> {
        const res = await this.datasource.call(params);
        return res.map((element) => new GetDriverEntity({
            driverId: element.id!,
            driverName: element.driverName,
            driverBirthday: element.birthday,
            driverNationality: element.nationality,
            driverPathImage: element.pathImageDriver,
            driverTitleCount: element.titleCount,
            driverTeam:
                params.isGetTeam === true ?
                    {
                        id: element.team!.id,
                        teamName: element.team!.teamName,
                        about: element.team!.about,
                        country: element.team!.country,
                        pathImageTeam: element.team!.pathImageTeam,
                    }
                    : undefined,
        }))

    }
}