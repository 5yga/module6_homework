let someNumber = prompt('Введите число от 0 до 1000');

function primeNumber(someNum) {
    if (someNum <= 1000 && someNum >= 0) {
        if (someNum !== 2 || someNum !== 3){
            return `${someNum} - является простым числом`;
        }
        for (let i = 2; i < (someNum ** (1/2)); i++){
            if (someNum % i > 0){
                return `${someNum} - является простым числом`;
            }
        }
        return `${someNum} - не является простым числом`;
    } else {
        return "Данные неверны";
    }
}

let result = primeNumber(someNumber);

console.log(result);
