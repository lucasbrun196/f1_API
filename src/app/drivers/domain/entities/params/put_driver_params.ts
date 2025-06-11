import ErrorResponse from "../../../../../responses/error";

export class PutDriverParams {
    readonly driverId;
    readonly driverTitleCount;
    readonly driverTeam;
    constructor({
        driverTitleCount,
        driverTeam,
        driverId,
    }: PutDriverParamsJson
    ) {
        if (typeof driverId == 'string') {
            driverId = Number(driverId);
            if (isNaN(driverId)) {
                throw new ErrorResponse(422, 'Invalid driver id');
            }
            this.driverId = driverId;

        } else {
            this.driverId = driverId;
        }

        if (driverTeam === undefined && driverTeam === undefined) {
            throw new ErrorResponse(422, 'You should update unless one propriete');
        }

        if (typeof driverTitleCount == 'string' && driverTitleCount !== undefined) {
            driverTitleCount = Number(driverTitleCount);
            if (isNaN(driverTitleCount)) {
                throw new ErrorResponse(422, 'driverTitleCout must be a number');
            }
            this.driverTitleCount = driverTitleCount;
        } else {
            this.driverTitleCount = driverTitleCount;
        }

        if (typeof driverTeam == 'string' && driverTeam !== undefined) {
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
    driverId: number | string;
    driverTitleCount: number | undefined;
    driverTeam: number | undefined;
}