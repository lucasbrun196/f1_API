export class FilterTeamParams {
    readonly name?: string;
    readonly country?: string;

    constructor(name?: string, country?: string) {
        this.name = name
        this.country = country
    }
}