import { DriverEntity } from "../domain/entities/driver_entity";
import { DriversAndTeam } from "../domain/entities/drivers_and_teams";
import { FilterDriverParams } from "../domain/params/filter_driver_params";

export interface IGetDriverDataSource{
    call(params: FilterDriverParams): Promise<any[]>
}