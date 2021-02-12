// module.exports.counter = (arr) => {
//     return `There are ${arr.length} elements in this array`;
// };

let counter = (arr) => {
    return `There are ${arr.length} elements in this array`;
};

let adder = (a, b) => {
    return `The sum of 2 numbers is  ${a + b}`;
};

let pi = 3.142

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi

module.exports = {
    counter,
    adder,
    pi
}
