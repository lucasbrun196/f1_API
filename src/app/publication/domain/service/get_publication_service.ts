import { Pagination, PaginationJson } from "../../../../utils/pagination";
import { GetPublicationEntity } from "../entities/get_publication_entity";
import { IGetPublicationRepository } from "../repository/i_get_publication_repository";
import { IGetPublicationService } from "./i_get_publication_service";

export class GetPublicationService implements IGetPublicationService {
    private readonly repository;
    constructor(repository: IGetPublicationRepository) {
        this.repository = repository;
    }
    async call(params: PaginationJson): Promise<GetPublicationEntity[]> {
        return this.repository.call(params);
    }
}