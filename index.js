const extendedGCD = require("./src/extendedGCD");

function isCoprime(a, b) {
    return extendedGCD(a, b).gcd === 1;
}

module.exports = isCoprime;

module.exports = {
    isCoprime
};