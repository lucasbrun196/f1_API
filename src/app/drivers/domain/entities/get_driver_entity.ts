import { GetTeamJson } from "../../../teams/domain/entities/get_team_entity";
import { TeamEntityJson } from "../../../teams/domain/entities/typeorm/team_entity";

export class GetDriverEntity {
    readonly driverId;
    readonly driverName;
    readonly driverNationality;
    readonly driverBirthday;
    readonly driverPathImage;
    readonly driverTitleCount;
    readonly driverTeam;
    constructor(
        {
            driverId,
            driverName,
            driverNationality,
            driverBirthday,
            driverPathImage,
            driverTitleCount,
            driverTeam
        }: GetDriverJson
    ) {
        this.driverId = driverId;
        this.driverName = driverName;
        this.driverNationality = driverNationality;
        this.driverBirthday = driverBirthday;
        this.driverPathImage = driverPathImage;
        this.driverTitleCount = driverTitleCount;
        this.driverTeam = driverTeam;
    }

}

export type GetDriverJson = {
    driverId: number;
    driverName: string;
    driverNationality: string;
    driverBirthday: string;
    driverPathImage: string;
    driverTitleCount: number;
    driverTeam: GetTeamJson | {} | undefined;
}