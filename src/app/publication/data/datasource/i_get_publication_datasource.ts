import { GetPublicationEntityJson } from "../../domain/entities/get_publication_entity";
import { GetPublicationParams } from "../../domain/entities/params/get_publication_params";

export interface IGetPublicationDatasource {
    call(params: GetPublicationParams): Promise<GetPublicationEntityJson[]>;
}