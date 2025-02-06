import { DriverEntity } from "../domain/entities/driver_entity";

export interface ICreateDriverDataSource{
    call(params: DriverEntity): Promise<void>
}