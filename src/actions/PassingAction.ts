import {Action} from "./Action.js"

// PassingAction Inherit from Action
export class PassingAction extends Action 
{
    perform(name: string): string 
    {
        return `${name} is short passing the ball to the teammate   to keep momentum going on.`;
    }
}