let someNumber = prompt('Введите число от 0 до 1000');

function primeNumber(someNum) {
    if (someNum == 0 || someNum == 1){
        return `${someNum} - не является простым числом`;
    }
    if (someNum <= 1000 && someNum > 1) {
        for (let i = 2; i <= (someNum ** (1/2)); i++){
            if (someNum % i === 0){
                return `${someNum} - не является простым числом`;
            }
        }
        return `${someNum} - является простым числом`;
    } else {
        return "Данные неверны";
    }
}

let result = primeNumber(someNumber);

console.log(result);


