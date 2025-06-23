import { DriverEntity } from "../../domain/entities/typeorm/driver_entity";

export interface ICreateDriverDatasource {
    call(params: DriverEntity): Promise<void>
}