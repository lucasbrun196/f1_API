import { DataSource } from "typeorm";
import { IDeleteTeamDataSource } from "./i_delete_team_datasource";
import { TeamEntity } from "../domain/entities/team_entity";

export class DeleteTeamDataSource implements IDeleteTeamDataSource{
    private db: DataSource

    constructor(db: DataSource){
        this.db = db
    }

    async call(params: number): Promise<void>{
        await this.db.createQueryBuilder()
        .delete()
        .from(TeamEntity)
        .where('id = :id', {id: params})
        .execute()
    }
}