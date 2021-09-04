let numeroIngresado = prompt('Ingrese un número:');
let numero = parseInt(numeroIngresado);

if (numero < 10) {
  alert('El número ingresado tiene 1 cifra.');
  console.log('El número ingresado tiene 1 cifra.');
} else if (numero < 100) {
  alert('El número ingresado tiene 2 cifras.');
  console.log('El número ingresado tiene 2 cifras.');
} else if (numero < 1000) {
  alert('El número ingresado tiene 3 cifras.');
  console.log('El número ingresado tiene 3 cifras.');
} else {
  alert('El número ingresado tiene 4 cifras o más.');
  console.log('El número ingresado tiene 4 cifras o más.');
}

let txtIngresado = prompt('Escriba "Buenos días":');

if (txtIngresado === 'Buenos días') {
  console.log('El usuario respetó la consigna.');
} else {
  console.log('El usuario no respetó la consigna.');
}

let numeroIngresado2 = prompt('Ingrese otro número:');
let numero2 = parseInt(numeroIngresado2);

if (numero2 < 50) {
  alert('El número ingresado es menor a 50.');
  console.log('El número ingresado es menor a 50.');
} else if (numero2 > 100) {
  alert('El número ingresado es mayor a 100.');
  console.log('El número ingresado es mayor a 100.');
} else {
  alert('El número ingresado está entre 50 y 100.');
  console.log('El número ingresado está entre 50 y 100.');
}
