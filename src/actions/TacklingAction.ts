import {Action} from "./Action.js"

// TacklingAction Inherit from Action
export class TacklingAction extends Action 
{
    perform(name: string): string 
    {
        return `${name} is tackling the ball from opponent to break up the play.`;
    }
}