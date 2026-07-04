import { Commentary } from "./Commentary.js";
import { Team } from "../models/Team.js";

// Hindi Inherit from Commentary
export class Hindi extends Commentary
{
    MatchStartCommentary(t1: Team, t2: Team) {
        console.log(`\n App sab ka svagat hai ${t1.nickname} and ${t2.nickname} do no team ka palda aaj bhari hai.`);
    }

    MomentsCommentary(txt: string) {
        console.log(`${txt}`);
    }

    MatchEndCommentary(winner: Team | null) {
        console.log(`\n Maza aa gaya aaj! ${winner ? `${winner.fullname} ne baji mar li!` : "aaj match barabari ka ho gaya!"}`);
    }
}