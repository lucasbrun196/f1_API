import { DriverEntity } from "../entities/driver_entity";

export interface ICreateDriverService{
    call(params: DriverEntity): Promise<void>
}