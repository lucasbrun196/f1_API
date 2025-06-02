import { PutDriverParamsJson } from "../entities/params/put_driver_params";
import { IPutDriverRepository } from "../repository/i_put_driver_repository";
import { IPutDriverService } from "./i_put_driver_service";

export class PutDriverService implements IPutDriverService {
    private readonly repository;
    constructor(repository: IPutDriverRepository) {
        this.repository = repository;
    }
    async call(params: PutDriverParamsJson): Promise<void> {
        return await this.repository.call(params);
    }
}