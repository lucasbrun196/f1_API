import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/team_entity";
import { IGetTeamDataSource } from "./i_get_team_datasource";
import { FilterTeamParams } from "../domain/params/filter_team_params";

export class GetTeamDataSource implements IGetTeamDataSource{
    private db: DataSource

    constructor(db: DataSource){
        this.db = db;
    }

    async call(params: FilterTeamParams): Promise<TeamEntity[]> {
        let query = this.db.createQueryBuilder()
        .select("*")
        .from(TeamEntity, 'team')
        if(params.name != null){
            query.where("team.teamName = :name", {name: params.name})
        }
        if(params.country != null){
            query.andWhere("team.country = :country", {country: params.country})
        }
        return query.execute()


    }

}