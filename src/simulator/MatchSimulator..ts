import { Team } from "../models/Team.js";
import { Commentary } from "../commentary/Commentary.js";
import { StrikerRole } from "../roles/StrikerRole.js";
import { GoalkeeperRole } from "../roles/GoalkeeperRole.js";
import { DefenderRole } from "../roles/DefenderRole.js";
import { MidfielderRole } from "../roles/MidfielderRole.js";


// this is the Simulate class when the user create object of this class with team1 team2 and Commentary
// than just call the simulate method with that object game is start then.
export class MatchSimulator {
    public team1: Team;
    public team2: Team;
    public commentary: Commentary;
    public score: { team1: number; team2: number };

    constructor(team1: Team, team2: Team, commentary: Commentary) {
        this.team1 = team1;
        this.team2 = team2;
        this.commentary = commentary;
        this.score = { team1: 0, team2: 0 };
    }
 
    // start simulation
    public runSimulation(possessions: number = 3) {
        this.commentary.MatchStartCommentary(this.team1, this.team2);
        console.log("-----------------------------------------------------------------");

        // if we pass "n" number of attacks that many attacks will be perform
        for (let i = 0; i < possessions; i++) {
            console.log(`\n [ATTACK #${i + 1}]`);
            const isTeam1Attacking = Math.random() > 0.5;
            const attackingTeam = isTeam1Attacking ? this.team1 : this.team2;
            const defendingTeam = isTeam1Attacking ? this.team2 : this.team1;
            
            this.executeCorrelatedPlay(attackingTeam, defendingTeam, isTeam1Attacking);
            this.sleep(1000);
        }
 
        this.displayStats();
    }
 
    // attack method how the nth attack is performing
    executeCorrelatedPlay(attackingTeam: Team, defendingTeam: Team, isTeam1Attacking: boolean) {
        
        // get the player by role
        const builder = attackingTeam.getRandomPlayerFromList(attackingTeam.getPlayersByRole(MidfielderRole).concat(attackingTeam.getPlayersByRole(DefenderRole)));
        
        if (!builder) 
            return;

        // on get player execute the run method and Commentary
        const runText = builder.performAction('run');
        this.commentary.MomentsCommentary(runText);
        this.sleep(600);
 
        // on get player execute the pass method and Commentary
        const passText = builder.performAction('pass');
        if (passText) this.commentary.MomentsCommentary(passText);
        this.sleep(600);
 
        // get player of midfielder to corss or long pass 
        const playmaker = attackingTeam.getRandomPlayerFromList(attackingTeam.getPlayersByRole(MidfielderRole));
        
        if (!playmaker) 
            return;

        const crossText = playmaker.performAction('cross') || playmaker.performAction('pass');
        this.commentary.MomentsCommentary(crossText);
        this.sleep(600);
 
        // get player for shoot 
        const striker = attackingTeam.getRandomPlayerFromList(attackingTeam.getPlayersByRole(StrikerRole));
        
        if (!striker) 
            return;

        const shootText = striker.performAction('shoot');
        this.commentary.MomentsCommentary(shootText);
        this.sleep(800);
 

        const goalScored = Math.random() > 0.45;
        
        // first case if attcking team success the goal 
        if (goalScored) {
            if (isTeam1Attacking) 
            {
                this.score.team1++;
            }
            else 
            {
               this.score.team2++;
            }

            console.log(`GOAL FOR ${attackingTeam.nickname}!!!`);
            this.sleep(400);
            
            // celebration perform by that striker player
            const celebrationText = striker.performAction('celebrate');
            this.commentary.MomentsCommentary(celebrationText);

        } 
        // second case if defending team tackle to attacking team or save the goal by goalkeeper
        else 
        {
            // get both defender and goalkeeper of defending Team
            const defender = defendingTeam.getRandomPlayerFromList(defendingTeam.getPlayersByRole(DefenderRole));
            const goalkeeper = defendingTeam.getRandomPlayerFromList(defendingTeam.getPlayersByRole(GoalkeeperRole));
            
            if (!defender || !goalkeeper) 
                return;

            //if tackle by defending team
            if (Math.random() > 0.5) 
            {
                this.commentary.MomentsCommentary(defender.performAction('tackle'));
            } 
            // if goalkeeper save the goal
            else 
            {
                this.commentary.MomentsCommentary(goalkeeper.performAction('save'));
            }
            console.log(`Attack cleared by ${defendingTeam.nickname}'s defensive wall.`);
        }

        // live score after every attack
        console.log(` Live Score: ${this.team1.nickname} ${this.score.team1} - ${this.score.team2} ${this.team2.nickname}`);
    }
 
    // at the end of all attacks show the result
    displayStats() {
        console.log("\n=================================================================");
        let winner: Team | null = null;
        if (this.score.team1 > this.score.team2) 
        {
            winner = this.team1;
        }
        if (this.score.team2 > this.score.team1)
        {
            winner = this.team2;
        } 
        this.commentary.MatchEndCommentary(winner);
    }
 
    // put some delay to perform well
    sleep(ms: number) {
        const date = Date.now();
        let currentDate = null;
        do 
        { 
            currentDate = Date.now(); 
        } while (currentDate - date < ms);
    }
}