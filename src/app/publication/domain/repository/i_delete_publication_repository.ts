import { DeletePublicationParamsJson } from "../entities/params/delete_publication_params";

export interface IDeletePublicationRepository {
    call(params: DeletePublicationParamsJson): Promise<void>;
}