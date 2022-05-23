//functions validadores
function arraycheck(arr) {
    return Array.isArray(arr);
}

//functions operacionals
function suma(arr) {
  if (arraycheck(arr)) {
    let result = 0;
    arr.forEach((element) => {
      result += element;
    });
    return result;
  } else {
    return (result = "No és un array");
  }
}

function resta(arr) {
  if (arraycheck(arr)) {
    let result = 0;
    arr.forEach((element) => {
      result += element;
    });
    return result;
  } else {
    return (result = "No és un array");
  }
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

let arr0 = [3, 6, 42, 1];
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