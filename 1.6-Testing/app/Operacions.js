
//functions operacionals
function suma(...args) {
  let result = args.reduce((pre, after) => {
    return pre + after
  });
  return result;
}

function resta(primer, ...args) {
    return args.reduce((pre, after) =>  pre - after, primer);
  
}

function multiplica(arr) {
  if (arraycheck(arr)) {
    let result = 1;
    arr.forEach((element) => {
      result *= element;
    });
    return result;
  } else {
    return (result = "No és un array");
  }
}

function dividir(arr) {
  if (arraycheck(arr)) {
    if (arr.length == 2 && arr[1] != 0) {
      result = arr[0] / arr[1];
    } else if (arr.length < 2) {
      result = "No hi ha suficients valors";
    } else if (arr.length > 2) {
      result = "Hi ha masses valors";
    } else {
      result = "Infinit";
    }
    return result;
  } else {
    return (result = "No és un array");
  }
}

console.log(suma(3, 6, 42, 1));
console.log(resta(100, 1, 2, 3));
let arr1 = [3, -16, 42, -1];
let arr2 = [3, 6];

module.exports = {
  suma,
  resta,
  multiplica,
  dividir
}

/*
console.log(suma(arr0), resta(arr1), multiplica(arr0), dividir(arr2));
suma(arr0)
resta(arr1); //Si vols restar ha de portar el signe negatiu
multiplica(arr0);
dividir(arr2);
*/