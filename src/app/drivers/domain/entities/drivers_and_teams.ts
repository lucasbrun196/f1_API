import { DriverEntity } from "./driver_entity";

export class DriversAndTeam{
    readonly teamId;
    readonly teamName;
    readonly teamCountry;
    readonly teamAbout;
    readonly teamPathImage;
    readonly drivers;
    constructor(
        teamId: number,
        teamName: string,
        teamCountry: string,
        teamAbout: string,
        teamPathImage: string,
        drivers: DriverEntity[],
    ) {
        this.teamId = teamId,
        this.teamName = teamName,
        this.teamCountry = teamCountry,
        this.teamAbout = teamAbout,
        this.teamPathImage = teamPathImage,
        this.drivers = drivers
    }
}