import { PaginationJson } from "../../../../utils/pagination";
import { GetPublicationEntity } from "../entities/get_publication_entity";

export interface IGetPublicationService {
    call(params: PaginationJson): Promise<GetPublicationEntity[]>;
}