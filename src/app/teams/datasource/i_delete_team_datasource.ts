export interface IDeleteTeamDatasource {
    call(params: number): Promise<void>
}