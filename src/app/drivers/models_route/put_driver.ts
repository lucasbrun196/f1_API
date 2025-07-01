import { PutDriverParamsJson } from "../domain/entities/params/put_driver_params";

export interface PutDriverData{
    Body: PutDriverParamsJson; 
    Params: { 
        id: number,
    };
}