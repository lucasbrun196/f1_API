import { DataSource } from "typeorm";
import { IdTeamParam } from "../domain/entities/params/id_team_param";
import { IGetTeamImagePathDatasource } from "./i_get_team_image_path_datasource";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import ErrorResponse from "../../../responses/error";
import { DatabaseException } from "../../../utils/exceptions/database_exceptions";

export class GetTeamImagePathDatasource implements IGetTeamImagePathDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: IdTeamParam): Promise<string> {
        try {
            const path = await this.db.getRepository(TeamEntity)
                .findOneOrFail({
                    where: {
                        id: params.id
                    },
                    select: ["pathImageTeam"]

                })


            return path.pathImageTeam;
        } catch (e) {
            throw DatabaseException.error({ code: '23503', detail: 'id' });
        }


    }

}