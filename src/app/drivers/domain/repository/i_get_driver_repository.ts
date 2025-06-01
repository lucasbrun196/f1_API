import { DriverEntity } from "../entities/driver_entity";
import { DriversAndTeam } from "../entities/drivers_and_teams";
import { FilterDriverParams } from "../params/filter_driver_params";

export interface IGetDriverRepository{
    call(params: FilterDriverParams): Promise<DriverEntity[] | DriversAndTeam[]>;
}