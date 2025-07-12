import { PostEntity } from "../../domain/entities/typeorm/post_entity";

export interface IPostPublicationDatasource {
    call(params: PostEntity): Promise<void>;
}