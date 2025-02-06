import { DataSource } from "typeorm";
import { DriverEntity } from "../domain/entities/driver_entity";
import { ICreateDriverDataSource } from "./i_create_driver_datasource";
import { TeamEntity } from "../../teams/domain/entities/team_entity";
import ErrorResponse from "../../../responses/error";
import { DriverParams } from "../domain/params/team_params";

export class CreateDriverDataSource implements ICreateDriverDataSource{
    private db: DataSource

    constructor(db: DataSource){
        this.db = db
    }

    async call(params: DriverParams): Promise<void>{
        let existingTeam
        if(params.team != null){
            existingTeam = await this.db.createQueryBuilder()
            .select("*")
            .from(TeamEntity, "team")
            .where("team.id = :id_fk", {id_fk: params.id_team_fk})
            .getOne()
            if(existingTeam == null){
                throw new ErrorResponse(400, "Team must be created")
            }
        }

        await this.db.createQueryBuilder()
        .insert()
        .into(DriverEntity)
        .values({
            driverName: params.driverName,
            birthday: params.birthday,
            nationality: params.nationality,
            titleCount: params.titleCount,
            pathImageDriver: params.pathImageDriver,
            team: existingTeam
        })
        .execute()
    }

}