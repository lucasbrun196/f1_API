import { Column, Driver, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "../../../../teams/domain/entities/typeorm/team_entity";


@Entity("Driver")
export class DriverEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column("varchar")
    driverName: string

    @Column("varchar")
    birthday: string

    @Column("varchar")
    pathImageDriver: string

    @Column("int")
    titleCount: number

    @Column("varchar")
    nationality: string

    @ManyToOne(() => TeamEntity, (team: TeamEntity) => team.drivers, { nullable: true, onDelete: "SET NULL" })
    @JoinColumn({ name: "id_team_fk" })
    team?: TeamEntity

    constructor(
        driverName: string,
        driverBirthday: string,
        driverPathImage: string,
        driverTitleCount: number,
        driverNationality: string,
        driverIdTeam: TeamEntity | undefined,
        driverId?: number,
    ) {
        this.driverName = driverName;
        this.birthday = driverBirthday;
        this.pathImageDriver = driverPathImage;
        this.titleCount = driverTitleCount;
        this.nationality = driverNationality;
        if (driverId !== undefined) {
            this.id = driverId;
        }
        if (driverIdTeam !== undefined) {
            this.team = driverIdTeam;
        }
    }
}

export type DriverEntityJson = {
    driverName: string,
    driverBirthday: string,
    driverPathImage: string,
    driverTitleCount: number,
    driverNationality: string,
    driverIdTeam: TeamEntity | undefined,
    driverId?: number,
}
