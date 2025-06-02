import { PutDriverParamsJson } from "../entities/params/put_driver_params";

export interface IPutDriverService {
    call(params: PutDriverParamsJson): Promise<void>;
}