import { Team } from "../models/Team.js";

// this is simple Commentary class
// new language come than just create new class and inherit that from the Commentary class
export abstract class Commentary 
{
    abstract MatchStartCommentary(t1: Team, t2: Team): void;
    abstract MomentsCommentary(text: string): void;
    abstract MatchEndCommentary(winner: Team | null): void;
}