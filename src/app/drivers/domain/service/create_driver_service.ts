import { CreateDriverDataSource } from "../../datasource/create_driver_datasource";
import { ICreateDriverDataSource } from "../../datasource/i_create_driver_datasource";
import { DriverEntity } from "../entities/driver_entity";
import { ICreateDriverService } from "./i_create_driver_service";

export class CreateDriverService implements ICreateDriverService{
    private driverDataSource: ICreateDriverDataSource
    constructor(driverDataSource: CreateDriverDataSource){
        this.driverDataSource = driverDataSource
    }
    async call(params: DriverEntity): Promise<void>{
        await this.driverDataSource.call(params)
    }
}