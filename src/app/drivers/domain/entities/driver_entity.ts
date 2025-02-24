import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TeamEntity } from "../../../teams/domain/entities/team_entity";


@Entity("Driver")
export class DriverEntity{

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

    @ManyToOne(() => TeamEntity, (team: TeamEntity) => team.drivers, {nullable: true, onDelete: "SET NULL"})
    @JoinColumn({name: "id_team_fk"})
    team?: TeamEntity

    constructor(
        
        driverName: string,
        birthday: string,
        pathImageDriver: string,
        titleCount: number,
        nationality: string,
        team?: TeamEntity,
        id?: number,
    ){
        this.driverName = driverName;
        this.birthday = birthday;
        this.pathImageDriver = pathImageDriver;
        this.titleCount = titleCount;
        this.nationality = nationality;
        if(id !== undefined){
            this.id = id;
        }
        if(team !== undefined){
            this.team = team;
        }
    }

}