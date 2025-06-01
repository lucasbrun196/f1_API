import { DriverEntity } from "../entities/driver_entity";

export interface ICreateDriverRepository{
    call(params: DriverEntity): Promise<void>;
}