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
    
    constructor (params: {teamName: string, country: string, about: string, pathImageTeam: string, id?: number}){
        if(params.id){
            this.id = params.id
        }
        this.teamName = params.teamName
        this.country = params.country
        this.about = params.about
        this.pathImageTeam = params.pathImageTeam
    }
}