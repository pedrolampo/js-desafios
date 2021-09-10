let numeroIngresado = parseInt(prompt('Ingrese un número par:'));

let numPar = numeroIngresado % 2;

switch (numPar) {
  case 0:
    console.log('Perfecto!');
    break;

  default:
    console.log('El número ingresado no es par.');
    break;
}
