let MaccuB = [3, 1, 2, 8, 50, '22', 0];

function determinantEvenOddNums(myArray) {
    let numsEven = 0;
    let numsOdd = 0;
    let numsNull = 0;
    
    myArray.forEach(function(item, index, array){
      
    if (typeof myArray[index] === 'number'){
      if (myArray[index] !== 0) {
        if (myArray[index] % 2 === 0){
          numsEven += 1;
        } else {
          numsOdd += 1;
        }
      } else {
        numsNull += 1;
      }
    } else {
      console.log(`${myArray[index]} - это не число`)
    }
      
    });
    
    if (numsNull === 0){
      console.log(`${numsEven} - количество четных элементов`);
      console.log(`${numsOdd} - количество нечетных элементов`);
    } else {
      console.log(`${numsEven} - количество четных элементов`);
      console.log(`${numsOdd} - количество нечетных элементов`);
      console.log(`${numsNull} - количество элементов равным 0`);
    }

}

determinantEvenOddNums(MaccuB);
