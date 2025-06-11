import { DataSource } from "typeorm";
import { IDeleteTeamDatasource } from "./i_delete_team_datasource";
import { TeamEntity } from "../domain/entities/typeorm/team_entity";
import ErrorResponse from "../../../responses/error";
import { DriverEntity } from "../../drivers/domain/entities/typeorm/driver_entity";
import { DeleteTeamParams } from "../domain/entities/params/delete_team_params";

export class DeleteTeamDatasource implements IDeleteTeamDatasource {
    private readonly db;

    constructor(db: DataSource) {
        this.db = db
    }

    async call(params: DeleteTeamParams): Promise<void> {
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