import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { DriverEntity } from "../../../drivers/domain/entities/driver_entity";


@Entity("Team")
export class TeamEntity{

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
    
    constructor (teamName: string, country: string, about: string, pathImageTeam: string, id?: number){
        if(id != null){
            this.id = id
        }
        this.teamName = teamName
        this.country = country
        this.about = about
        this.pathImageTeam = pathImageTeam
    }
}