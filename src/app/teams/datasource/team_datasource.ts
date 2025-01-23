import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/team_entity";
import { ITeamDataSource } from "./i_team_datasource";

export class TeamDataSource implements ITeamDataSource{
    private db: DataSource
    constructor(db: DataSource){
        this.db = db
    }
    async call(params: TeamEntity): Promise<void> {
        await this.db.createQueryBuilder()
        .insert()
        .into("Team")
        .values([
            {
                teamName: params.teamName,
                country: params.country,
                about: params.about,
                pathImageTeam: params.pathImageTeam
            }
        ])
        .execute()
    }

    // TO DO: IMPLEMENTS ERROR TREATMENTS AND VALIDATIONS

}