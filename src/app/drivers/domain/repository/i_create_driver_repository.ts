import { DriverEntityJson } from "../entities/typeorm/driver_entity";

export interface ICreateDriverRepository {
    call(params: DriverEntityJson): Promise<void>;
}