import { DataSource } from "typeorm";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import ErrorResponse from "../../../responses/error";
import { DriverEntity } from "../../drivers/domain/entities/typeorm/driver_entity";
import { IdTeamParam } from "../domain/entities/params/id_team_param";
import { IDeleteTeamDatasource } from "../data/datasource/i_delete_team_datasource";

export class DeleteTeamDatasource implements IDeleteTeamDatasource {
    private readonly db;

    constructor(db: DataSource) {
        this.db = db
    }

    async call(params: IdTeamParam): Promise<void> {
        const query = this.db.getRepository(TeamEntity);
        const exist = await query.findOneBy(
            { id: params.id, }
        );
        if (exist !== null) {
            await this.db.createQueryBuilder()
                .update(DriverEntity)
                .set({
                    team: null,
                })
                .where({
                    team: params
                }).execute();
            await query.delete({ id: params.id });
        } else {
            throw new ErrorResponse(404, 'Team id not found');
        }
    }
}