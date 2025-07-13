import { Pagination, PaginationJson } from "../../../../utils/pagination";
import { GetPublicationEntity } from "../../domain/entities/get_publication_entity";
import { IGetPublicationRepository } from "../../domain/repository/i_get_publication_repository";
import { IGetPublicationDatasource } from "../datasource/i_get_publication_datasource";

export class GetPublicationRepository implements IGetPublicationRepository {

    private readonly datasource;

    constructor(datasource: IGetPublicationDatasource) {
        this.datasource = datasource;
    }

    async call(params: PaginationJson): Promise<GetPublicationEntity[]> {
        const paginationParams = new Pagination(params);
        const result = await this.datasource.call(paginationParams);
        return result.map((e) => new GetPublicationEntity(e));
    }
}