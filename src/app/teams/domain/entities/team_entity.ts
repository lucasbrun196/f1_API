
export class TeamEntity{
    teamName: String
    country: String
    about: String
    pathImageTeam: String
    
    constructor (params: {teamName: String, country: String, about: String, pathImageTeam: String}){
       this.teamName = params.teamName
       this.country = params.country
       this.about = params.about
       this.pathImageTeam = params.pathImageTeam
    }
}