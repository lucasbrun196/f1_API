import { DeletePublicationParams, DeletePublicationParamsJson } from "../../domain/entities/params/delete_publication_params";
import { PostEntity } from "../../domain/entities/typeorm/post_entity";
import { IValidatePublicationRepository } from "../../domain/repository/i_validate_publication_repository";
import { IValidatePublicationDatasource } from "../datasource/i_validate_publication_datasource";

export class ValidatePublicationRepository implements IValidatePublicationRepository {

    private readonly validatePublicationDatasource;

    constructor(validatePublicationDatasource: IValidatePublicationDatasource) {
        this.validatePublicationDatasource = validatePublicationDatasource;
    }
    async call(params: DeletePublicationParamsJson): Promise<PostEntity | null> {
        const deletePublicationParams = new DeletePublicationParams(params);
        return this.validatePublicationDatasource.call(deletePublicationParams);
    }
}