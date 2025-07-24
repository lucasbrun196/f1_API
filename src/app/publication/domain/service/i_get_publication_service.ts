import { GetPublicationEntity } from "../entities/get_publication_entity";
import { GetPublicationParamsJson } from "../entities/params/get_publication_params";

export interface IGetPublicationService {
    call(params: GetPublicationParamsJson): Promise<GetPublicationEntity[]>;
}