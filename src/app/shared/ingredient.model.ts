export class Ingredient {
    /*
    public name: string;
    public amount: number;
    */

    /*
    add public infront of both arguments to automatically give us properties with property names
    we specified (name/amount) and automatically assign values we recieve in the ctor to
    these newly created properties (neat shortcut) 
    */
    constructor(public name: string, public amount: number){
        /*
        this.name = name;
        this.amount = amount;
        */
    }
}