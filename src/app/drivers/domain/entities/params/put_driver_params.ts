import ErrorResponse from "../../../../../responses/error";

export class PutDriverParams {

    readonly driverTitleCount;
    readonly driverTeam;
    constructor({
        driverTitleCount,
        driverTeam
    }: PutDriverParamsJson
    ) {
        if (driverTeam === undefined && driverTeam === undefined) {
            throw new ErrorResponse(422, 'You should update unless one propriete');
        }

        if (typeof driverTitleCount == 'string') {
            driverTitleCount = Number(driverTitleCount);
            if (isNaN(driverTitleCount)) {
                throw new ErrorResponse(422, 'driverTitleCout must be a number');
            }
            this.driverTitleCount = driverTitleCount;
        } else {
            this.driverTitleCount = driverTitleCount;
        }

        this.driverTitleCount = driverTitleCount;
        if (typeof driverTeam == 'string') {
            driverTeam = Number(driverTeam);
            if (isNaN(driverTeam)) {
                throw new ErrorResponse(422, 'driverTeam must be a number')
            }
            this.driverTeam = driverTeam;

        } else {
            this.driverTeam = driverTeam;
        }

    }

}

export type PutDriverParamsJson = {
    driverTitleCount: number | undefined;
    driverTeam: number | undefined;
}