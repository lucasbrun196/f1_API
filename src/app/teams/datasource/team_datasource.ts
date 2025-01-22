import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/team_entity";
import { ITeamDataSource } from "./i_team_datasource";

export class TeamDataSource implements ITeamDataSource{
    private db: DataSource
    constructor(db: DataSource){
        this.db = db
    }
    async call(params: TeamEntity): Promise<void> {
        // TO DO
    }

}