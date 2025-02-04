import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/team_entity";
import { ICreateTeamDataSource } from "./i_create_team_datasource";
import ErrorResponse from "../../../responses/error";

export class CreateTeamDataSource implements ICreateTeamDataSource{
    private db: DataSource
    constructor(db: DataSource){
        this.db = db
    }
    async validateName(name: string): Promise<number>{
        return this.db.createQueryBuilder()
        .select("*")
        .from(TeamEntity, "team")
        .where("team.teamName = :name", {name: name})
        .getCount()
    }
    async call(params: TeamEntity): Promise<void> {
        if(await this.validateName(params.teamName) > 0){
            throw new ErrorResponse(400, "Duplicated Name")
        }else{
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

    }

}