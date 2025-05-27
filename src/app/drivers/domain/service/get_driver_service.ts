import { GetDriverDataSource } from "../../datasource/get_driver_datasource";
import { IGetDriverDataSource } from "../../datasource/i_get_driver_datasource";
import { DriverEntity } from "../entities/driver_entity";
import { FilterDriverParams } from "../params/filter_driver_params";
import { IGetDriverService } from "./i_get_driver_service";

export class GetDriverService implements IGetDriverService{
    private driverDataSource: IGetDriverDataSource

    constructor(driverDataSource: GetDriverDataSource){
        this.driverDataSource = driverDataSource

    }
    async call(params: FilterDriverParams): Promise<DriverEntity[]> {
        return await this.driverDataSource.call(params)
    } 
}