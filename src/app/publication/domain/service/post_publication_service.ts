import { PublicationEntityJson } from "../entities/publication_entity";
import { IPostPublicationRepository } from "../repository/i_post_publication_repository";
import { IPostPublicationService } from "./i_post_publication_service";

export class PostPublicationService implements IPostPublicationService {

    private readonly repository;

    constructor(repository: IPostPublicationRepository) {
        this.repository = repository;
    }

    async call(params: PublicationEntityJson): Promise<void> {
        return this.repository.call(params);
    }
}