import { Schedule } from "./fixtures/Schedule.js";
import { Match } from "./fixtures/Match.js";
import { team1 } from "./data/TeamSetup.js";
import { team2 } from "./data/TeamSetup.js";
import { Hindi } from "./commentary/Hindi.js";
import { Tournament } from "./tournament/Tournament.js";

const schedule = new Schedule();

schedule.addMatch(new Match(team1, team2, new Hindi()));

const footballTournament = new Tournament(schedule);

footballTournament.start();