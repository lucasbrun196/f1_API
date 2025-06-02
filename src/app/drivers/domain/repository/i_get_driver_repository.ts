import { GetDriverEntity } from "../entities/get_driver_entity";
import { FilterDriverParamsJson } from "../entities/params/filter_driver_params";

export interface IGetDriverRepository {
    call(params: FilterDriverParamsJson): Promise<GetDriverEntity[]>;
}