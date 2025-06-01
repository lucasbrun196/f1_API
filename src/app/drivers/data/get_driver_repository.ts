import { IGetDriverDataSource } from "../datasource/i_get_driver_datasource";
import { DriverEntity } from "../domain/entities/driver_entity";
import { DriversAndTeam } from "../domain/entities/drivers_and_teams";
import { FilterDriverParams } from "../domain/params/filter_driver_params";
import { IGetDriverRepository } from "../domain/repository/i_get_driver_repository";

export class GetDriverRepository implements IGetDriverRepository{
    private readonly datasource;
    constructor(datasource: IGetDriverDataSource){
        this.datasource = datasource;
    }
    async call(params: FilterDriverParams): Promise<DriverEntity[] | DriversAndTeam[]> {
        const res = await this.datasource.call(params);
        if(params.isGetTeam){
            let resList: DriversAndTeam[] = [];
            res.forEach((element) => {
                const indexTeam: number = resList.findIndex((e) => e.teamId == element.teamId);
                if(indexTeam === -1){
                }
            });
        }
        return res;
    }
}