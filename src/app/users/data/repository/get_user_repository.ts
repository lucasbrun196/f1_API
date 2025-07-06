import { GetUserEntity } from "../../domain/entities/get_user_entity";
import { GetUserParams, GetUserParamsJson } from "../../domain/entities/params/get_user_params";
import { IGetUserRepository } from "../../domain/repository/i_get_user_repository";
import { IGetUserDatasource } from "../datasource/i_get_user_datasource";

export class GetUserRepository implements IGetUserRepository{
    
    private readonly datasource;

    constructor(datasource: IGetUserDatasource){
        this.datasource = datasource;
    }
    async call(params: GetUserParamsJson): Promise<GetUserEntity[]> {
        const getUserParams = new GetUserParams(params);
        const result = await this.datasource.call(getUserParams);
        return result.map((e) => new GetUserEntity({
            id: e.id!,
            username: e.username,
            id_favorite_team_fk: e.id_favorite_team_fk?.id,
            id_favorite_driver_fk: e.id_favorite_driver_fk?.id,
            country: e.country,
            phone: e.phone!,
            admin: e.admin!
        }));
    }
}