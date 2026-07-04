// basic Action class if in future new actions come than 
// we create new class and inherit that from this Action class.
export abstract class Action 
{
    abstract perform(name: string): string;
}