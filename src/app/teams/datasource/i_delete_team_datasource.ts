export interface IDeleteTeamDataSource{
    call(params: number): Promise<void>
}