import { PutDriverParams, PutDriverParamsJson } from "../domain/entities/params/put_driver_params";
import { IPutDriverRepository } from "../domain/repository/i_put_driver_repository";

export class PutDriverRepository implements IPutDriverRepository {
    async call(params: PutDriverParamsJson): Promise<void> {
        const paramsToUpdate: PutDriverParams = new PutDriverParams({
            driverTitleCount: params.driverTitleCount,
            driverTeam: params.driverTeam,
        })
    }
}