import ErrorResponse from "../../../../../responses/error";

export class FilterTeamParams {
    readonly name?: string;
    readonly country?: string;

    constructor({
        name,
        country
    }: FilterTeamParamsJson
    ) {

        if ((name !== undefined && country !== undefined)) {
            throw new ErrorResponse(422, 'Query filter error')
        }
        this.name = name
        this.country = country
    }
}

export type FilterTeamParamsJson = {
    name?: string | undefined,
    country?: string | undefined,
}