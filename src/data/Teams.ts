import { Team } from "../models/Team.js";

// just create a new team object when we want to add a new team
const team1 = new Team(
    "Mumbai Indians",
    "MI", 
    "Mumbai"
);

const team2 = new Team(
    "Chennai Super Kings", 
    "CSK", 
    "Tamil Nadu"
);

const team3 = new Team(
    "Punjab Kings",
    "PBKS", 
    "Punjab"
);

const team4 = new Team(
    "Gujarat Titans", 
    "GT", 
    "Gujarat"
);

export {
    team1,
    team2,
    team3,
    team4
}