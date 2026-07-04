import {Action} from "./Action.js"


// SaveGoalAction Inherit from Action
export class SaveGoalAction extends Action 
{
    perform(name: string): string 
    {
        return `${name} is dynamically flies into the air to save the goal while opponent is shooting.`;
    }
}