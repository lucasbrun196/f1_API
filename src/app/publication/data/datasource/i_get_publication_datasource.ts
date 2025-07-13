import { Pagination } from "../../../../utils/pagination";
import { GetPublicationEntityJson } from "../../domain/entities/get_publication_entity";

export interface IGetPublicationDatasource {
    call(params: Pagination): Promise<GetPublicationEntityJson[]>;
}