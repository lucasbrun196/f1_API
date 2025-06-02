import { DriverEntityJson } from "../entities/typeorm/driver_entity";


export interface ICreateDriverService {
    call(params: DriverEntityJson): Promise<void>
}