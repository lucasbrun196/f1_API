import { DataSource } from "typeorm";
import { DriverEntity } from "../domain/entities/typeorm/driver_entity";
import { IGetDriverDatasource } from "./i_get_driver_datasource";
import { FilterDriverParams } from "../domain/entities/params/filter_driver_params";

export class GetDriverDatasource implements IGetDriverDatasource {
    private db: DataSource
    constructor(db: DataSource) {
        this.db = db
    }
    async call(params: FilterDriverParams): Promise<DriverEntity[]> {
        const query = this.db.getRepository(DriverEntity)
            .createQueryBuilder("driver");
        if (params.isGetTeam) query.innerJoinAndSelect("driver.team", "team");
        if (params.driverName) query.where("driver.driverName = :driverName", { driverName: params.driverName })
        if (params.teamId) query.andWhere("driver.team.id = :teamId", { teamId: params.teamId });
        query.orderBy('driver.id', 'ASC')
        return await query.getMany();
    }

}