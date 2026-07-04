import { Role } from "./Role.js";
import { RunningAction } from "../actions/RunningAction.js";
import { LongPassAction } from "../actions/LongPassAction.js";

// MidfielderRole Inherit from Role
export class MidfielderRole extends Role
{
    constructor()
    {
        super();
        this.actions.run = new RunningAction();
        this.actions.cross = new LongPassAction();
    }
}