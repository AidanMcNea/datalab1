export class vehicle
{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    Information(){
       console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}` );
    }
}