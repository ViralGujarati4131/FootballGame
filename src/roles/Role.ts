import { Action } from "../actions/Action.js";
import { CelebrationAction } from "../actions/CelebrationAction.js";
import { PassingAction } from "../actions/PassingAction.js";

// this is a basic role class in this role wise we have stored the actions
// if in future new role come than we just create newrole class
// and that inherit from the Role and just add their new actions into that newclass.
export class Role 
{
    public actions: { [key: string]: Action };

    constructor() 
    {
        this.actions = { 
            celebrate: new CelebrationAction(),
            pass: new PassingAction()
        };
    }

    getAction(type: string): Action | null 
    { 
        return this.actions[type] || null; 
    }
}