import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import { ICreateTeamDatasource } from "./i_create_team_datasource";
import ErrorResponse from "../../../responses/error";

export class CreateTeamDatasource implements ICreateTeamDatasource {
    private db: DataSource
    constructor(db: DataSource) {
        this.db = db
    }
    async call(params: TeamEntity): Promise<void> {
        await this.db.getRepository(TeamEntity).save(params)
    }
}