import { Match } from "./Match.js";

export class Schedule {

    private matches: Match[] = [];

    addMatch(match: Match): void {
        this.matches.push(match);
    }

    getMatches(): Match[] {
        return this.matches;
    }

}