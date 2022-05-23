const input = true;
const promesa1 = new Promise((resolve, reject) => {
  if (input) {
    resolve(console.log("hola"));
  } else {
    reject(console.log("adeu"));
  }
});

promesa1
  .then((res) => {
    //resposta quan la promesa ja està completada
    console.log(`El programa t'ha saludat amb una promesa`)
})
.catch((err) => {
    //respesta error perquè no s'ha pogut fer la promesa
    console.log(`El programa no ha resolt la promesa i t'ha rejectat`)
  });
