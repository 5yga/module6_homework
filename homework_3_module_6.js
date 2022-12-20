function sum(numA) {
    return function(numB) {
        return numA + numB;
    };
}

let resultFunc = sum(5);
console.log( resultFunc(0), resultFunc(1), resultFunc(2) );

console.log( sum(1)(2), sum(1)(2), sum(23)(2) );
