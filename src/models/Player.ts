import { Role } from "../roles/Role.js";

// this is a basic player class
// if in new updates new player come just we have create object of this class.
export class Player 
{
    public name: string;
    public age: number;
    public state: string;
    public fitness: string;
    public role: Role;

    constructor(name: string, age: number, state: string, fitness: string, role: Role) 
    {
        this.name = name;
        this.age = age;
        this.state = state;
        this.fitness = fitness;
        this.role = role;
    }

    performAction(actionType: string): string 
    {
        const action = this.role.getAction(actionType);
        return action ? (action.perform(this.name) as string) : "";
    }
}