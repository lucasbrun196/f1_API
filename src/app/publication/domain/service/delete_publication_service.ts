import ErrorResponse from "../../../../responses/error";
import { DeletePublicationParamsJson } from "../entities/params/delete_publication_params";
import { IDeletePublicationRepository } from "../repository/i_delete_publication_repository";
import { IValidatePublicationRepository } from "../repository/i_validate_publication_repository";
import { IDeletePublicationService } from "./i_delete_publication_service";

export class DeletePublicationService implements IDeletePublicationService {
    private readonly repository;
    private readonly validatePublicationRepository;

    constructor(repository: IDeletePublicationRepository, validatePublicationRepository: IValidatePublicationRepository) {
        this.repository = repository;
        this.validatePublicationRepository = validatePublicationRepository;
    }
    async call(params: DeletePublicationParamsJson): Promise<void> {
        if (!params.admin) {
            const postIsValid = await this.validatePublicationRepository.call(params);
            if (postIsValid == null) {
                throw new ErrorResponse(401, 'User not allower to delete this publication');
            }
        }

        return this.repository.call(params)
    }
}