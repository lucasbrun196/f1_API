import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import { ICreateTeamDatasource } from "./i_create_team_datasource";

export class CreateTeamDatasource implements ICreateTeamDatasource {
    private readonly db;
    constructor(db: DataSource) {
        this.db = db
    }
    async call(params: TeamEntity): Promise<void> {
        await this.db.getRepository(TeamEntity).save(params)
    }
}