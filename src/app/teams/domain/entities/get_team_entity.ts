export class GetTeamEntity {
    readonly teamId;
    readonly teamName;
    readonly teamAbout;
    readonly teamCountry;
    readonly teamPathImage;
    constructor({
        teamId,
        teamName,
        teamAbout,
        teamCountry,
        teamPathImage
    }: GetTeamJson
    ) {
        this.teamId = teamId,
            this.teamName = teamName,
            this.teamAbout = teamAbout,
            this.teamCountry = teamCountry,
            this.teamPathImage = teamPathImage
    }
}

export type GetTeamJson = {
    teamId: number | undefined,
    teamName: string,
    teamAbout: string,
    teamCountry: string
    teamPathImage: string,
}
