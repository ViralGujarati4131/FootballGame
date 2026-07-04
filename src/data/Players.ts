import { Player } from "../models/Player.js";
import { StrikerRole } from "../roles/StrikerRole.js";
import { GoalkeeperRole } from "../roles/GoalkeeperRole.js";
import { DefenderRole } from "../roles/DefenderRole.js";
import { MidfielderRole } from "../roles/MidfielderRole.js";

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
  "Bangaluru",
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


export {
  player1,
  player2,
  player3,
  player4,
  player5,
  player6,
  player7,
  player8,
  player9,
  player10,
  player11,
  player12
}