import { PutDriverParamsJson, PutDriverParams } from "../../domain/entities/params/put_driver_params";
import { IPutDriverRepository } from "../../domain/repository/i_put_driver_repository";
import { IPutDriverDatasource } from "../datasource/i_put_driver_datasource";


export class PutDriverRepository implements IPutDriverRepository {
    private readonly datasource;
    constructor(datasource: IPutDriverDatasource) {
        this.datasource = datasource;
    }
    async call(params: PutDriverParamsJson): Promise<void> {
        const paramsToUpdate: PutDriverParams = new PutDriverParams({
            driverId: params.driverId,
            driverTitleCount: params.driverTitleCount,
            driverTeam: params.driverTeam,
        });
        await this.datasource.call(paramsToUpdate);

    }
}