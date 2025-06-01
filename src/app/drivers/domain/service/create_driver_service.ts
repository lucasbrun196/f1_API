import { CreateDriverDataSource } from "../../datasource/create_driver_datasource";
import { ICreateDriverDataSource } from "../../datasource/i_create_driver_datasource";
import { DriverEntity } from "../entities/driver_entity";
import { ICreateDriverRepository } from "../repository/i_create_driver_repository";
import { ICreateDriverService } from "./i_create_driver_service";

export class CreateDriverService implements ICreateDriverService{
    private readonly repository;
    constructor(repository: ICreateDriverRepository){
        this.repository = repository;
    }
    async call(params: DriverEntity): Promise<void>{
        await this.repository.call(params)
    }
}