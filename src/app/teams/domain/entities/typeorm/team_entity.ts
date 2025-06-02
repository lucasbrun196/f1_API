import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { DriverEntity } from "../../../../drivers/domain/entities/typeorm/driver_entity";



@Entity("Team")
export class TeamEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column("varchar")
    teamName: string;

    @Column("varchar")
    country: string;

    @Column("text")
    about: string;

    @Column("varchar")
    pathImageTeam: string;

    @OneToMany(() => DriverEntity, (driver: DriverEntity) => driver.team)
    drivers?: DriverEntity[]

    constructor(teamName: string, teamCountry: string, teamAbout: string, teamPathImage: string, teamId?: number) {
        if (teamId != null) {
            this.id = teamId
        }
        this.teamName = teamName
        this.country = teamCountry
        this.about = teamAbout
        this.pathImageTeam = teamPathImage
    }
}

export type TeamEntityJson = {
    teamName: string,
    teamCountry: string,
    teamAbout: string,
    teamPathImage: string,
    teamId?: number
}