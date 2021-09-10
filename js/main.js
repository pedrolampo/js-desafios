const diasDelMes = 30;
let fechaActual = parseInt(prompt('Ingrese la fecha de hoy:'));

for (let dias = 1; dias <= diasDelMes; dias++) {
  if (dias < fechaActual) {
    console.log('El día ' + dias + ' de Septiembre ya pasó.');
  } else if (dias == fechaActual) {
    console.log('Hoy es ' + dias + ' de Septiembre.');
  } else {
    console.log('Todavía no es ' + dias + ' de Septiembre.');
  }
}
