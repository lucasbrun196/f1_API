import { GetDriverEntity } from "../entities/get_driver_entity";
import { FilterDriverParams } from "../params/filter_driver_params";

export interface IGetDriverService{
    call(params: FilterDriverParams): Promise<GetDriverEntity[]>
}