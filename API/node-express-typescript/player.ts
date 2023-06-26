export class Player{
    private ID : number;
    private FirstName : string;
    private LastName : string;
    private APT : number;
    private SET : number;
    private NationalAssociation : string;
    private average: number;
    private position: string;
    

    constructor(ID : number, FirstName : string, LastName : string, APT : number, SET : number, NationalAssociation : string, average: number, position: string){
        this.ID = ID;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.APT = APT;
        this.SET = SET;
        this.NationalAssociation = NationalAssociation;
        this.average = average;
        this.position = position;
    }
    public getID() : number{
        return this.ID;
    }
    public getFirstName() : string{
        return this.FirstName;
    }
    public getLastName() : string{
        return this.LastName;
    }
    public getAPT() : number{
        return this.APT;
    }
    public getSET() : number{
        return this.SET;
    }
    public getNationalAssociation() : string{
        return this.NationalAssociation;
    }
    public getAverage() : number{   
        return this.average;
    }
    public getPosition() : string{
        return this.position;
    }
    public setID(ID : number) : void{
        this.ID = ID;
    }
    public setFirstName(FirstName : string) : void{
        this.FirstName = FirstName;
    }
    public setLastName(LastName : string) : void{
        this.LastName = LastName;
    }
    public setAPT(APT : number) : void{
        this.APT = APT;
    }
    public setSET(SET : number) : void{
        this.SET = SET;
    }
    public setNationalAssociation(NationalAssociation : string) : void{
        this.NationalAssociation = NationalAssociation;
    }
    public setAverage() : void{
        this.average = (this.APT + this.SET) / 2;
    }
    public setPosition(position : string) : void{
        this.position = position;
    }
    public describe(): string {
        return `ID: ${this.ID + " "}FirstName: ${this.FirstName+ " "}LastName: ${this.LastName+ " "}APT: ${this.APT+ " "}SET: ${this.SET+ " "}NationalAssociation: ${this.NationalAssociation+ " "}average: ${this.average+ " "} position: ${this.position+ " "}`;
      }
      
}