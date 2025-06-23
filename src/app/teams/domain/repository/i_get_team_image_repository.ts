export interface IGetTeamImageRepository {
    call(params: string): Promise<Buffer>;
}