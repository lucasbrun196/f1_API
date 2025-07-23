import { DeletePublicationParams } from "../../domain/entities/params/delete_publication_params";
import { PostEntity } from "../../domain/entities/typeorm/post_entity";

export interface IValidatePublicationDatasource {
    call(params: DeletePublicationParams): Promise<PostEntity | null>;
}