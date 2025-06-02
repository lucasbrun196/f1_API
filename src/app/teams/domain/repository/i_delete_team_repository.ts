export interface IDeleteTeamRepository {
    call(params: number): Promise<void>;
}