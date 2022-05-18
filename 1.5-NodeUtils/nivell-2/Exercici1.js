const TXT = `Text repetit`;

function esperar() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(console.log(TXT));
    }, 1000);
  });
}

async function imprimir() {
  while (true) {
    await esperar();
  }
}

imprimir();
