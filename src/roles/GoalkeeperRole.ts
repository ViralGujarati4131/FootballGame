import { Role } from "./Role.js";
import { SaveGoalAction } from "../actions/SaveGoalAction.js";

// GoalkeeperRole Inherit from Role
export class GoalkeeperRole extends Role
{
    constructor()
    {
        super();
        this.actions.save = new SaveGoalAction();
    }
}