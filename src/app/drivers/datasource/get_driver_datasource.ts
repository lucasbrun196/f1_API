import { DataSource } from "typeorm";
import { DriverEntity } from "../domain/entities/driver_entity";
import { IGetDriverDataSource } from "./i_get_driver_datasource";
import { FilterDriverParams } from "../domain/params/filter_driver_params";
import { TeamEntity } from "../../teams/domain/entities/team_entity";

export class GetDriverDataSource implements IGetDriverDataSource{
    private db: DataSource
    constructor(db: DataSource){
        this.db = db
    }
    async call(params: FilterDriverParams): Promise<DriverEntity[]> {
 
            let query = this.db.createQueryBuilder()
            .select("*")
            .from(DriverEntity, "Driver")
            
            if(params.isGetTeam){
                query.innerJoinAndSelect(TeamEntity, "Team", "Team.id = Driver.id_team_fk")
            }
            if(params.teamId){
                query.where("Driver.id_team_fk = :teamId", {teamId: params.teamId})
            }
            return query.execute()
        



    }

}