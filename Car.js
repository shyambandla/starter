
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
    setModel(model) {
        this.model = model;
    }
    getModel() { return this.model; }
}

module.exports = Car;