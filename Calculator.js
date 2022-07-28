const Scientific = require("./Scientific");


class Calculator extends Scientific{

    a;
    b;

    constructor(a,b){
        this.a=a;
        this.b=b;
    }

    setA(a){
        this.a=a;
    }
    getA(){
        return this.a;
    }

    setB(b){
        this.b=b;
    }

    getB(){
        return this.b;
    }

    add(){
        return this.a+this.b;
    }

    subtract(){
        return this.a-this.b;
    }

    multiply(){
        return this.a*this.b;
    }

    divide(){
        return this.a/this.b;
    }




}

module.exports = Calculator;