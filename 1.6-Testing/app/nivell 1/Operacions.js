
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

function multiplicar(...args) {
  return args.reduce((pre, after) =>  pre * after, 1);
   
}

function dividir(primer, ...args) {
  for(let i = 0; i< arguments.length; i++){
    if(arguments[i]==0){
      return "Infinit";
    }
  }
  return args.reduce((pre, after) => pre / after, primer);
}

// console.log(suma(3, 6, 42, 1));
// console.log(resta(100, 1, 2, 3));
// console.log(multiplicar(100, 1, 2, 3));
// console.log(dividir(100, 1, 2, 3));


module.exports = {
  suma,
  resta,
  multiplicar,
  dividir
}
