import { DeletePublicationParams, DeletePublicationParamsJson } from "../../domain/entities/params/delete_publication_params";
import { IDeletePublicationRepository } from "../../domain/repository/i_delete_publication_repository";
import { IDeletePublicationDatasource } from "../datasource/i_delete_publication_datasource";

export class DeletePublicationRepository implements IDeletePublicationRepository {

    private readonly datasource;

    constructor(datasource: IDeletePublicationDatasource) {
        this.datasource = datasource;
    }

    async call(params: DeletePublicationParamsJson): Promise<void> {
        const deletePublicationParams = new DeletePublicationParams(params);
        return this.datasource.call(deletePublicationParams);
    }
}