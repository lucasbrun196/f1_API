import { DataSource } from "typeorm";
import { DriverEntity } from "../domain/entities/driver_entity";
import { ICreateDriverDataSource } from "./i_create_driver_datasource";
import { TeamEntity } from "../../teams/domain/entities/team_entity";
import ErrorResponse from "../../../responses/error";


export class CreateDriverDataSource implements ICreateDriverDataSource{
    private db: DataSource

    constructor(db: DataSource){
        this.db = db
    }

    async call(params: DriverEntity): Promise<void>{
        
        let existingTeam
        if(params.team != null){
            const idTeam = Number(params.team)
            existingTeam = await this.db.getRepository(TeamEntity).findOne({
                where: {id: idTeam}
            })
            if(existingTeam == null){
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