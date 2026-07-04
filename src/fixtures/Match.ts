import { Team } from "../models/Team.js";
import { Commentary } from "../commentary/Commentary.js";

export class Match {
    constructor(
        public team1: Team,
        public team2: Team,
        public commentary: Commentary
    ) {}
}


