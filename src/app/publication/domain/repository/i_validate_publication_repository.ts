import { DeletePublicationParamsJson } from "../entities/params/delete_publication_params";
import { PostEntity } from "../entities/typeorm/post_entity";

export interface IValidatePublicationRepository {
    call(params: DeletePublicationParamsJson): Promise<PostEntity | null>;
}