import { DeletePublicationParamsJson } from "../entities/params/delete_publication_params";

export interface IDeletePublicationService {
    call(params: DeletePublicationParamsJson): Promise<void>
}