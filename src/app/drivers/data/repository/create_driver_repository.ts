import { DriverEntity, DriverEntityJson } from "../../domain/entities/typeorm/driver_entity";
import { ICreateDriverRepository } from "../../domain/repository/i_create_driver_repository";
import { ICreateDriverDatasource } from "../datasource/i_create_driver_datasource";


export class CreateDriverRepository implements ICreateDriverRepository {
    private readonly datasource;
    constructor(datasource: ICreateDriverDatasource) {
        this.datasource = datasource;
    }
    async call(params: DriverEntityJson): Promise<void> {
        const driver = new DriverEntity(
            params.driverName,
            params.driverBirthday,
            params.driverPathImage,
            params.driverTitleCount ?? 0,
            params.driverNationality,
            params.driverIdTeam
        )
        return await this.datasource.call(driver);
    }
}