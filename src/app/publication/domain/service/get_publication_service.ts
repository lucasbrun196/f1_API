import { GetPublicationEntity } from "../entities/get_publication_entity";
import { GetPublicationParamsJson } from "../entities/params/get_publication_params";
import { IGetPublicationRepository } from "../repository/i_get_publication_repository";
import { IGetPublicationService } from "./i_get_publication_service";

export class GetPublicationService implements IGetPublicationService {
    private readonly repository;
    constructor(repository: IGetPublicationRepository) {
        this.repository = repository;
    }
    async call(params: GetPublicationParamsJson): Promise<GetPublicationEntity[]> {
        return this.repository.call(params);
    }
}