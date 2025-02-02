import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


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