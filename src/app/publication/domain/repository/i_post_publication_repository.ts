import { PublicationEntityJson } from "../entities/publication_entity";

export interface IPostPublicationRepository {
    call(params: PublicationEntityJson): Promise<void>;
}