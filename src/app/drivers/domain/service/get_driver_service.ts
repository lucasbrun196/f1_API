import { GetDriverEntity } from "../entities/get_driver_entity";
import { FilterDriverParams } from "../params/filter_driver_params";
import { IGetDriverRepository } from "../repository/i_get_driver_repository";
import { IGetDriverService } from "./i_get_driver_service";

export class GetDriverService implements IGetDriverService{
    private readonly repository;
    constructor(repository: IGetDriverRepository){
        this.repository = repository;
    }
    async call(params: FilterDriverParams): Promise<GetDriverEntity[]> {
        return await this.repository.call(params)
    } 
}