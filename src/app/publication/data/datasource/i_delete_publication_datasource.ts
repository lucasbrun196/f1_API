import { DeletePublicationParams } from "../../domain/entities/params/delete_publication_params";

export interface IDeletePublicationDatasource {
    call(params: DeletePublicationParams): Promise<void>;
}