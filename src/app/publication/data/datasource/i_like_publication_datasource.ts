export interface ILikePublicationDatasource {
    call(params: number, publicationLikesCount: number): Promise<void>;
}