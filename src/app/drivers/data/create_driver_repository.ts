import { DriverEntity } from "../domain/entities/driver_entity";
import { ICreateDriverRepository } from "../domain/repository/i_create_driver_repository";

export class CreateDriverRepository implements ICreateDriverRepository{
    private readonly datasource;
    constructor(datasource: ICreateDriverRepository){
        this.datasource = datasource;
    }
    async call(params: DriverEntity): Promise<void>{
        return await this.datasource.call(params);
    }
}