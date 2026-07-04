import {Action} from "./Action.js"

// RunningAction Inherit from Action
export class RunningAction extends Action 
{
    perform(name: string): string 
    {
        return `${name} is sprints to get the open space.`;
    }
}