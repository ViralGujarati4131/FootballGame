import { Schedule } from "../fixtures/Schedule.js";
import { MatchSimulator } from "../simulator/MatchSimulator..js";

export class Tournament {

    constructor(private schedule: Schedule) {}

    start(): void {

        for (const match of this.schedule.getMatches()) {

            const simulator = new MatchSimulator(
                match.team1,
                match.team2,
                match.commentary
            );

            simulator.runSimulation(5);

        }

    }

}