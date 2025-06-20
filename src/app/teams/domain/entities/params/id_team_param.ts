import ErrorResponse from "../../../../../responses/error";

export class IdTeamParam {
    readonly id;

    constructor({ id }: IdTeamJson) {
        if (typeof id == 'string') {
            id = Number(id);
            if (isNaN(id)) {
                throw new ErrorResponse(422, 'Team id should be a number');
            }
            this.id = id;
        } else {
            this.id = id;
        }

    }
}

export type IdTeamJson = {
    id: number | string;
}