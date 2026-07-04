import {Action} from "./Action.js"

// Longpass Inherit from Action
export class LongPassAction extends Action 
{
    perform(name: string): string 
    {
        return `${name} is loft a brilliant cross deep into opponents penalty box.`;
    }
}