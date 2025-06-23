export interface IGetTeamImageService {
    call(params: string): Promise<Buffer>;
}