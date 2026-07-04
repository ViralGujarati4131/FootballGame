import { Role } from "./Role.js";
import { RunningAction } from "../actions/RunningAction.js";
import { TacklingAction } from "../actions/TacklingAction.js";

// DefenderRole Inherit from Role
export class DefenderRole extends Role
{
    constructor()
    {
        super();
        this.actions.run = new RunningAction();
        this.actions.tackle = new TacklingAction();
    }
}