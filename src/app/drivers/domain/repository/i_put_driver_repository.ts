import { PutDriverParamsJson } from "../entities/params/put_driver_params";

export interface IPutDriverRepository {
    call(params: PutDriverParamsJson): Promise<void>;
}