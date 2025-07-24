import ErrorResponse from "../../../../responses/error";
import { IGetPublicationRepository } from "../repository/i_get_publication_repository";
import { ILikePublicationRepository } from "../repository/i_like_publication_repository";
import { ILikePublicationService } from "./i_like_publication_service";

export class LikePublicationService implements ILikePublicationService {
    private readonly repository;
    private readonly getPublicationRepository;
    constructor(repository: ILikePublicationRepository, getPublicationRepository: IGetPublicationRepository) {
        this.repository = repository;
        this.getPublicationRepository = getPublicationRepository;
    }
    async call(params: number): Promise<void> {
        const publication = await this.getPublicationRepository.call({
            id: params,
        });

        if (publication.length === 0) {
            throw new ErrorResponse(400, "it doesn't exists a publication with this id");
        }
        return this.repository.call(params, publication[0].likescount + 1);
    }
}