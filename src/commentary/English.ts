import { Commentary } from "./Commentary.js";
import { Team } from "../models/Team.js";

// English Inherit from Commentary
export class English extends Commentary 
{
    MatchStartCommentary(t1: Team, t2: Team) 
    {
        console.log(`\nYou are all warm welcome to this fantastic venue. ${t1.nickname} and ${t2.nickname} are looking balanced and eager to perform.`);
    }

    MomentsCommentary(txt: string) 
    {
        console.log(`${txt}`);
    }

    MatchEndCommentary(winner: Team | null) 
    {
        console.log(`\nFull-time! ${winner ? `${winner.fullname} wins it!` : "It ends in a draw!"}`);
    }
}