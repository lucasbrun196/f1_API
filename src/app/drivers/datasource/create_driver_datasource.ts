import { DataSource } from "typeorm";
import { DriverEntity } from "../domain/entities/typeorm/driver_entity";
import { ICreateDriverDatasource } from "./i_create_driver_datasource";
import { TeamEntity } from "../../teams/domain/entities/typeorm/team_entity";
import ErrorResponse from "../../../responses/error";


export class CreateDriverDatasource implements ICreateDriverDatasource {
    private readonly db;

    constructor(db: DataSource) {
        this.db = db
    }

    async call(params: DriverEntity): Promise<void> {
        let existingTeam;
        if (params.team != null) {
            existingTeam = await this.db.getRepository(TeamEntity).findOne({
                where: { id: Number(params.team) }
            })
            if (existingTeam == null) {
                throw new ErrorResponse(400, "Team must be created")
            }
        }
        await this.db.getRepository(DriverEntity).save({
            driverName: params.driverName,
            birthday: params.birthday,
            nationality: params.nationality,
            titleCount: params.titleCount,
            pathImageDriver: params.pathImageDriver,
            team: existingTeam ?? undefined
        })
    }
}