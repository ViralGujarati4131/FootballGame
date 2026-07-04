// basic Action class if in future new actions come than 
// we create new class and inherit that from this Action class.
class Action 
{
    ActionPerforming(name){};
}


// RunningAction Inherit from Action
class RunningAction extends Action 
{
    ActionPerforming(name) 
    {
        return `${name} is sprints to get the open space.`;
    }
}

// PassingAction Inherit from Action
class PassingAction extends Action 
{
    ActionPerforming(name) 
    {
        return `${name} is short passing the ball to the teammate   to keep momentum going on.`;
    }
}

// CelebrationAction Inherit from Action
class CelebrationAction extends Action
{
    ActionPerforming(name) 
    {
        return `${name} is slides on their knees towards to fan in an increadible signature celebration.`;
    }
}

// ShootAction Inherit from Action
class ShootAction extends Action 
{
    ActionPerforming(name) 
    {
        return `${name} is fires a powerfull ball towards to goal.`;
    }
}

// Longpass Inherit from Action
class LongPassAction extends Action 
{
    ActionPerforming(name) 
    {
        return `${name} is loft a brilliant cross deep into opponents penalty box.`;
    }
}

// TacklingAction Inherit from Action
class TacklingAction extends Action 
{
    ActionPerforming(name) 
    {
        return `${name} is tackling the ball from opponent to break up the play.`;
    }
}

// SaveGoalAction Inherit from Action
class SaveGoalAction extends Action 
{
    ActionPerforming(name) 
    {
        return `${name} is dynamically fly into air to save the goal while opponet is shooting.`;
    }
}

// this is a basic role class in this role wise we have stored the actions
// if in future new role come than we just create newrole class
// and that inherit from the Role and just add their new actions into that newclass.
class Role 
{
    constructor() 
    {
        this.actions = { 
            celebrate: new CelebrationAction(),
            pass: new PassingAction()
        };
    }

    getAction(type) 
    { 
        return this.actions[type] || null; 
    }
}

// StrikerRole Inherit from Role
class StrikerRole extends Role
{
    constructor()
    {
        super();
        this.actions.run = new RunningAction();
        this.actions.shoot = new ShootAction();
    }
}

// GoalkeeperRole Inherit from Role
class GoalkeeperRole extends Role
{
    constructor()
    {
        super();
        this.actions.save = new SaveGoalAction();
    }
}

// DefenderRole Inherit from Role
class DefenderRole extends Role
{
    constructor()
    {
        super();
        this.actions.run = new RunningAction();
        this.actions.tackle = new TacklingAction();
    }
}

// MidfielderRole Inherit from Role
class MidfielderRole extends Role
{
    constructor()
    {
        super();
        this.actions.run = new RunningAction();
        this.actions.cross = new LongPassAction();
    }
}

// this is a basic player class
// if in new updates new player come just we have create object of this class.
class Player 
{

    constructor(name, age, state, fitness, role) 
    {
        this.name = name;
        this.age = age;
        this.state = state;
        this.fitness = fitness;
        this.role = role;
    }

    performAction(actionType) 
    {
        const action = this.role.getAction(actionType);
        return action.ActionPerforming(this.name);
    }
}

// this is a basic team class
// in future if new team come just need to create a object of this class.
class Team 
{

    constructor(fullname, nickname, state) 
    {
        this.Id = Team.nextId++;
        this.fullname = fullname;
        this.nickname = nickname;
        this.state = state;
        this.teamMembers = []; 
    }

    addPlayer(player) 
    { 
        this.teamMembers.push(player); 
    }
 
    getPlayersByRole(roleClass) 
    {
        return this.teamMembers.filter(player => player.role instanceof roleClass);
    }
 
    getRandomPlayerFromList(playersList) 
    {
        return playersList[Math.floor(Math.random() * playersList.length)];
    }
}

// this is simple commentry class
// new language come than just create new class and inherit that from the Commentry class
class Commentry
{
    MatchStartCommentry(t1,t2){};
    MomentsCommentry(text){};
    MatchEndCommentry(winner){};
}

// English Inherit from Commentry
class English extends Commentry 
{
    MatchStartCommentry(t1, t2) 
    {
        console.log(`\nYou are all warm welcome to this fantastic venue. ${t1.nickname} and ${t2.nickname} are looking balanced and eager to perform.`);
    }

    MomentsCommentry(txt) 
    {
        console.log(`${txt}`);
    }

    MatchEndCommentry(winner) 
    {
        console.log(`\nFull-time! ${winner ? `${winner.fullname} wins it!` : "It ends in a draw!"}`);
    }
}

// Hindi Inherit from commentry
class Hindi extends Commentry
{
    MatchStartCommentry(t1, t2) {
        console.log(`\n App sab ka svagat hai ${t1.nickname} and ${t2.nickname} do no team ka palda aaj bhari hai.`);
    }

    MomentsCommentry(txt) {
        console.log(`${txt}`);
    }

    MatchEndCommentry(winner) {
        console.log(`\n Maza aa gaya aaj! ${winner ? `${winner.fullname} ne baji mar li!` : "aaj match barabari ka ho gaya!"}`);
    }
}


// this is the Simulate class when the user create object of this class with team1 team2 and commentry
// than just call the simulate method with that object game is start then.
class MatchSimulator {
    constructor(team1, team2, commentary) {
        this.team1 = team1;
        this.team2 = team2;
        this.commentary = commentary;
        this.score = { team1: 0, team2: 0 };
    }
 
    // start simulation
    runSimulation(possessions = 3) {
        this.commentary.MatchStartCommentry(this.team1, this.team2);
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
    executeCorrelatedPlay(attackingTeam, defendingTeam, isTeam1Attacking) {
        
        // get the player by role
        const builder = attackingTeam.getRandomPlayerFromList(attackingTeam.getPlayersByRole(MidfielderRole).concat(attackingTeam.getPlayersByRole(DefenderRole)));
        
        // on get player execute the run method and commentry
        const runText = builder.performAction('run');
        this.commentary.MomentsCommentry(runText);
        this.sleep(600);
 
        // on get player execute the pass method and commentry
        const passText = builder.performAction('pass');
        if (passText) this.commentary.MomentsCommentry(passText);
        this.sleep(600);
 
        // get player of midfielder to corss or long pass 
        const playmaker = attackingTeam.getRandomPlayerFromList(attackingTeam.getPlayersByRole(MidfielderRole));
        const crossText = playmaker.performAction('cross') || playmaker.performAction('pass');
        this.commentary.MomentsCommentry(crossText);
        this.sleep(600);
 
        // get player for shoot 
        const striker = attackingTeam.getRandomPlayerFromList(attackingTeam.getPlayersByRole(StrikerRole));
        const shootText = striker.performAction('shoot');
        this.commentary.MomentsCommentry(shootText);
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
            this.commentary.MomentsCommentry(celebrationText);

        } 
        // second case if defending team tackle to attacking team or save the goal by goalkeeper
        else 
        {
            // get both defender and goalkeeper of defending Team
            const defender = defendingTeam.getRandomPlayerFromList(defendingTeam.getPlayersByRole(DefenderRole));
            const goalkeeper = defendingTeam.getRandomPlayerFromList(defendingTeam.getPlayersByRole(GoalkeeperRole));
            
            //if tackle by defending team
            if (Math.random() > 0.5) 
            {
                this.commentary.MomentsCommentry(defender.performAction('tackle'));
            } 
            // if goalkeeper save the goal
            else 
            {
                this.commentary.MomentsCommentry(goalkeeper.performAction('save'));
            }
            console.log(`Attack cleared by ${defendingTeam.nickname}'s defensive wall.`);
        }

        // live score after every attack
        console.log(` Live Score: ${this.team1.nickname} ${this.score.team1} - ${this.score.team2} ${this.team2.nickname}`);
    }
 
    // at the end of all attacks show the result
    displayStats() {
        console.log("\n=================================================================");
        let winner = null;
        if (this.score.team1 > this.score.team2) 
        {
            winner = this.team1;
        }
        if (this.score.team2 > this.score.team1)
        {
            winner = this.team2;
        } 
        this.commentary.MatchEndCommentry(winner);
    }
 
    // put some delay to perform well
    sleep(ms) {
        const date = Date.now();
        let currentDate = null;
        do 
        { 
            currentDate = Date.now(); 
        } while (currentDate - date < ms);
    }
}


// just create a new object when want to add new player
const player1 = new Player(
    "Virat Kohli", 
    36, 
    "Delhi", 
    "Excellent", 
    new DefenderRole()
);
const player2 = new Player(
  "Rohit Sharma",
  38,
  "Maharashtra",
  "Good",
  new StrikerRole(),
);
const player3 = new Player(
  "Hardik Pandya",
  33,
  "Gujarat",
  "Perfect",
  new StrikerRole(),
);
const player4 = new Player(
  "Ishan Kishan",
  30,
  "Bihar",
  "Excellent",
  new GoalkeeperRole(),
);
const player5 = new Player(
  "R Ashwin",
  37,
  "Chennai",
  "Good",
  new MidfielderRole(),
);
const player6 = new Player(
  "Jasprit Bumrah",
  35,
  "Gujarat",
  "Good",
  new MidfielderRole(),
);
const player7 = new Player(
  "K L Rahul",
  34,
  "Banglore",
  "Classic",
  new MidfielderRole(),
);
const player8 = new Player(
  "Shreyas Iyer",
  34,
  "Maharashtra",
  "Perfect",
  new StrikerRole(),
);
const player9 = new Player(
  "Shivam Dube",
  30,
  "Maharashtra",
  "Good",
  new StrikerRole(),
);
const player10 = new Player(
  "M S Dhoni",
  40,
  "Jharkhand",
  "Perfect",
  new GoalkeeperRole(),
);
const player11 = new Player(
  "Ravindra Jadeja",
  34,
  "Karnataka",
  "Excellent",
  new DefenderRole(),
);
const player12 = new Player(
  "Bhuvneshwar Kumar",
  36,
  "Maharashtra",
  "Good",
  new MidfielderRole(),
);

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

// add players to the team which player goes to which team
team1.addPlayer(player1);
team1.addPlayer(player2);
team1.addPlayer(player3);
team1.addPlayer(player4);
team1.addPlayer(player5);
team1.addPlayer(player6);


team2.addPlayer(player7);
team2.addPlayer(player8);
team2.addPlayer(player9);
team2.addPlayer(player10);
team2.addPlayer(player11);
team2.addPlayer(player12);

// just schedule match
const simulation = new MatchSimulator(team1, team2, new Hindi());

// start match
simulation.runSimulation(5);



