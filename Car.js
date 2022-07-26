
class Car{
    model;
    year;
    color;
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
    printCar(){
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Color: ${this.color}`);
    }
}

module.exports = Car;