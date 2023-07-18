export class team_info {
    public defender: number;
    public midfielders: number;
    public attackers: number;

    constructor (defender : number , midfielders : number , attackers: number) {
        this.defender = defender;
        this.midfielders = midfielders;
        this.attackers = attackers;
    }
}