const Car=require('./Car');
const Calculator=require('./Calculator');
const Scientific = require('./Scientific');

const calc=new Calculator(1,0);

const scient=new Scientific();

console.log(scient.power(2,2))
console.log(scient.squareRoot(4))




// const car=new Car();
// car.printCar();
// car.setModel("BMW");
// car.printCar();
// console.log(car.getModel());