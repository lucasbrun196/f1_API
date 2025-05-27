import { DriverEntity } from "../domain/entities/driver_entity";
import { FilterDriverParams } from "../domain/params/filter_driver_params";

export interface IGetDriverDataSource{
    call(params: FilterDriverParams): Promise<DriverEntity[]>
}