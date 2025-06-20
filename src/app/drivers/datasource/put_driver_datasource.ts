import { DataSource } from "typeorm";
import { PutDriverParams } from "../domain/entities/params/put_driver_params";
import { IPutDriverDatasource } from "./i_put_driver_datasource";
import { DriverEntity } from "../domain/entities/typeorm/driver_entity";
import { TeamEntity } from "../../teams/domain/entities/typeorm/team_entity";
import ErrorResponse from "../../../responses/error";

export class PutDriverDatasource implements IPutDriverDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }
    async call(params: PutDriverParams): Promise<void> {
        const existTeam = await this.db.createQueryBuilder()
            .select()
            .from(TeamEntity, 'team')
            .where('team.id = :id', { id: params.driverTeam })
            .getExists();
        const existDriver = await this.db.createQueryBuilder()
            .select()
            .from(DriverEntity, 'driver')
            .where('driver.id = :id', { id: params.driverId })
            .getExists();
        if (!existTeam) throw new ErrorResponse(400, 'Team does not exist');
        if (!existDriver) throw new ErrorResponse(400, 'Driver does not exist');
        const query = this.db.createQueryBuilder().update(DriverEntity);
        if (params.driverTeam) {
            query.set({ team: params.driverTeam });
        }
        if (params.driverTitleCount) {
            query.set({ titleCount: params.driverTitleCount });
        }
        query.where("id = :id", { id: params.driverId });
        await query.execute();
    }
}