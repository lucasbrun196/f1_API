import { DriverEntity } from "../entities/driver_entity";
import { FilterDriverParams } from "../params/filter_driver_params";

export interface IGetDriverService{
    call(params: FilterDriverParams): Promise<DriverEntity[]>
}