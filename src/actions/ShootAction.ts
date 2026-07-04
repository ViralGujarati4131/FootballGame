import {Action} from "./Action.js"

// ShootAction Inherit from Action
export class ShootAction extends Action 
{
    perform(name: string): string 
    {
        return `${name} is fires a powerful ball towards to goal.`;
    }
}