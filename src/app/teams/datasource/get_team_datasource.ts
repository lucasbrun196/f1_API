import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import { FilterTeamParams } from "../domain/entities/params/filter_team_params";
import { IGetTeamDatasource } from "../data/datasource/i_get_team_datasource";

export class GetTeamDatasource implements IGetTeamDatasource {
    private readonly db;

    constructor(db: DataSource) {
        this.db = db;
    }

    async call(params: FilterTeamParams): Promise<TeamEntity[]> {
        const query = this.db.getRepository(TeamEntity).createQueryBuilder();
        if (params.name) {
            query.where({ teamName: params.name })
        } else if (params.country) {
            query.where({ country: params.country })
        }

        return await query.getMany();
    }

}