import ErrorResponse from "../../../../../responses/error"

export class FilterDriverParams {
    readonly teamId?: number
    readonly driverName?: string
    readonly isGetTeam?: boolean | undefined
    constructor({
        teamId,
        driverName,
        isGetTeam,
    }: FilterDriverParamsJson
    ) {
        if (typeof isGetTeam == 'string') {
            if (isGetTeam === 'true') {
                this.isGetTeam = true;
            } else if (isGetTeam === 'false') {
                this.isGetTeam = false;
            } else {
                throw new ErrorResponse(422, 'IsGetTeam should be a boolean');
            }
        } else {
            this.isGetTeam = isGetTeam;
        }

        if (typeof teamId == 'string') {
            teamId = Number(teamId);
            if (isNaN(teamId)) {
                throw new ErrorResponse(422, "TeamId should be a number")
            }
            this.teamId = teamId;
        } else {
            this.teamId = teamId;
        }
        this.driverName = driverName
    }

}

export type FilterDriverParamsJson = {
    teamId?: number | undefined,
    driverName?: string | undefined,
    isGetTeam?: boolean | undefined
}