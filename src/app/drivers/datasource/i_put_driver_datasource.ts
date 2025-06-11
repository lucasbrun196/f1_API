import { PutDriverParams } from "../domain/entities/params/put_driver_params";

export interface IPutDriverDatasource {
    call(params: PutDriverParams): Promise<void>;
}