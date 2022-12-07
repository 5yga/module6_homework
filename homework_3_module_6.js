function firstFunc(num){
    console.log(num);
    return function(){
        return console.log(num + num);
    }
}

let numA = 4;

const resultFunc = firstFunc(numA);

resultFunc();

