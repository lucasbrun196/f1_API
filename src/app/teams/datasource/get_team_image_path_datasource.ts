import { DataSource } from "typeorm";
import { IdTeamParam } from "../domain/entities/params/id_team_param";
import { IGetTeamImagePathDatasource } from "./i_get_team_image_path_datasource";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import ErrorResponse from "../../../responses/error";
import { DriverEntity } from "../../drivers/domain/entities/typeorm/driver_entity";

export class GetTeamImagePathDatasource implements IGetTeamImagePathDatasource {

    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: IdTeamParam): Promise<string> {
        const existTeam = await this.db.createQueryBuilder()
            .select()
            .from(TeamEntity, 'team')
            .where('team.id = :id', { id: params.id })
            .getExists();

        if (!existTeam) throw new ErrorResponse(400, 'Team does not exist');
        const path = await this.db.getRepository(TeamEntity)
            .findOne({
                where: {
                    id: params.id
                },
                select: ["pathImageTeam"]
            });

        return path?.pathImageTeam!;

    }

}