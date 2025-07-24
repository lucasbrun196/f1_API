export interface ILikePublicationRepository {
    call(params: number, publicationLikesCount: number): Promise<void>;
}