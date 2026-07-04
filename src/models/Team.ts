import { Player } from "./Player.js";
import { Role } from "../roles/Role.js";

// this is a basic team class
// in future if new team come just need to create a object of this class.
export class Team 
{
    static nextId: number = 1;
    public Id: number;
    public fullname: string;
    public nickname: string;
    public state: string;
    public teamMembers: Player[];

    constructor(fullname: string, nickname: string, state: string) 
    {
        this.Id = Team.nextId++;
        this.fullname = fullname;
        this.nickname = nickname;
        this.state = state;
        this.teamMembers = []; 
    }

    addPlayer(player: Player) 
    { 
        this.teamMembers.push(player); 
    }
 
    getPlayersByRole(roleClass: new (...args: any[]) => Role): Player[] 
    {
        return this.teamMembers.filter(player => player.role instanceof roleClass);
    }
 
    getRandomPlayerFromList(players: Player[]): Player | null 
    {
        if (players.length === 0) 
            return null;

        const player = players[Math.floor(Math.random() * players.length)];
        return player ?? null;
    }
}