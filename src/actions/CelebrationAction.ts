import {Action} from "./Action.js"

// CelebrationAction Inherit from Action
export class CelebrationAction extends Action
{
    perform(name: string): string 
    {
        return `${name} is slides on their knees towards to fan in an incredible signature celebration.`;
    }
}