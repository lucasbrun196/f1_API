import { ILikePublicationRepository } from "../../domain/repository/i_like_publication_repository";
import { ILikePublicationDatasource } from "../datasource/i_like_publication_datasource";

export class LikePublicationRepository implements ILikePublicationRepository {

    private readonly datasource;

    constructor(datasource: ILikePublicationDatasource) {
        this.datasource = datasource;
    }

    async call(params: number, publicationLikesCount: number): Promise<void> {
        return this.datasource.call(params, publicationLikesCount);
    }
}