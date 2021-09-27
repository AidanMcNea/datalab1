import {Vehicle} from `./Vehicle`;

class Cars extends vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }
    Information(){
        super.Information();
        console.log(`Number Of Doors: ${this.doors}`)
    }
}

let myCar = new Cars('VW', 'GOLF', 2011, 5);
myCar.Information();

