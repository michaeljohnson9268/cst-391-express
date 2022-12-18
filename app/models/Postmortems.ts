export class Postmortems
{
    private id: number = -1;
    private name: string = "";
    private subName: string = "";
    private team: string = "";
    private cause: string = "";

    constructor(id:number, name:string, subName:string, team:string, cause:string)
    {
        this.id = id;
        this.name = name;
        this.subName= subName;
        this.team = team;
        this.cause = cause;
    }

    get Id():number
    {
        return this.id;
    }
    set Id(id: number)
    {
        this.id = id;
    }
    get Name():string
    {
        return this.name;
    }
    set Name(name: string)
    {
        this.name = name;
    }
    get SubName():string
    {
        return this.subName;
    }
    set SubName(subName: string)
    {
        this.subName = subName;
    }
    get Team():string
    {
        return this.team;
    }
    set Team(team: string)
    {
        this.team = team;
    }
    get Cause():string
    {
        return this.cause;
    }
    set Cause(cause: string)
    {
        this.cause = cause;
    }
}