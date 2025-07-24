import ErrorResponse from "../../../../responses/error";
import { GetPublicationEntity } from "../../domain/entities/get_publication_entity";
import { GetPublicationParams, GetPublicationParamsJson } from "../../domain/entities/params/get_publication_params";
import { IGetPublicationRepository } from "../../domain/repository/i_get_publication_repository";
import { IGetPublicationDatasource } from "../datasource/i_get_publication_datasource";

export class GetPublicationRepository implements IGetPublicationRepository {

    private readonly datasource;

    constructor(datasource: IGetPublicationDatasource) {
        this.datasource = datasource;
    }

    async call(params: GetPublicationParamsJson): Promise<GetPublicationEntity[]> {
        if (params.id != undefined && params.id != null) {
            if (typeof params.id == 'string') {
                params.id = Number.parseInt(params.id);
                if (isNaN(params.id)) {
                    throw new ErrorResponse(422, 'id must be a number');
                }
            }
        }
        const getPublicationParams = new GetPublicationParams({ pagination: params.pagination, id: params.id });
        const result = await this.datasource.call(getPublicationParams);
        return result.map((e) => new GetPublicationEntity(e));
    }
}