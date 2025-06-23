import { FilterDriverParams } from "../../domain/entities/params/filter_driver_params";
import { DriverEntity } from "../../domain/entities/typeorm/driver_entity";


export interface IGetDriverDatasource {
    call(params: FilterDriverParams): Promise<DriverEntity[]>
}