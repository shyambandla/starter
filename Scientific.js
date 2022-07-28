
class Scientific {

    power(base, exponent) {
        return Math.pow(base, exponent);
    };

    squareRoot(number) {
        return Math.sqrt(number);
    }

    cubeRoot(number) {
        return Math.cbrt(number);
    }
}

module.exports =Scientific;