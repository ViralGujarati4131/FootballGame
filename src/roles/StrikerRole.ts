import { Role } from "./Role.js"
import { RunningAction } from "../actions/RunningAction.js";
import { ShootAction } from "../actions/ShootAction.js";

// StrikerRole Inherit from Role
export class StrikerRole extends Role
{
    constructor()
    {
        super();
        this.actions.run = new RunningAction();
        this.actions.shoot = new ShootAction();
    }
}
