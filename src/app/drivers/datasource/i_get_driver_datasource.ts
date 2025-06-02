import { DriverEntity } from "../domain/entities/typeorm/driver_entity";
import { FilterDriverParams } from "../domain/entities/params/filter_driver_params";

export interface IGetDriverDatasource {
    call(params: FilterDriverParams): Promise<DriverEntity[]>
}