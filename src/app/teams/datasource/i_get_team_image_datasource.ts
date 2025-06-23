export interface IGetTeamImageDatasource {
    call(params: string): Promise<Buffer>;
}