import { GetUserEntity } from "../entities/get_user_entity";
import { GetUserParamsJson } from "../entities/params/get_user_params";
import { IGetUserRepository } from "../repository/i_get_user_repository";
import { IGetUserService } from "./i_get_user_service";

export class GetUserService implements IGetUserService{

    private readonly repository;

    constructor(repository: IGetUserRepository){
        this.repository = repository;
    }
    async call(params: GetUserParamsJson): Promise<GetUserEntity[]> {
        return this.repository.call(params);
    }
}