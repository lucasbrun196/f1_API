import { GetDriverDataSource } from "../../datasource/get_driver_datasource";
import { IGetDriverDataSource } from "../../datasource/i_get_driver_datasource";
import { DriverEntity } from "../entities/driver_entity";
import { DriversAndTeam } from "../entities/drivers_and_teams";
import { FilterDriverParams } from "../params/filter_driver_params";
import { IGetDriverRepository } from "../repository/i_get_driver_repository";
import { IGetDriverService } from "./i_get_driver_service";

export class GetDriverService implements IGetDriverService{
    private readonly repository;
    constructor(repository: IGetDriverRepository){
        this.repository = repository;
    }
    async call(params: FilterDriverParams): Promise<DriverEntity[] | DriversAndTeam[]> {
        return await this.repository.call(params)
    } 
}