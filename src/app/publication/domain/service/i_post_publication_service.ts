import { PublicationEntityJson } from "../entities/publication_entity";

export interface IPostPublicationService {
    call(params: PublicationEntityJson): Promise<void>;
}