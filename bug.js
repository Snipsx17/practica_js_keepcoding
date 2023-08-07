// Nuestro  cliente  está  intenando  calcular  el  promedio  de  una  lista  de  números  pero  nos  dice que  no  funciona.  No  nos  da  el  error,  solo  este  código  que  es  el  que  tiene  en  producción. Para  este  ejercicio  tenemos  que  crear  un  archivo  llamado  bug.js  con  la  solución.

const calcularPromedio = (numeros) => {
     return numeros.reduce( (acum, num) => acum += num) / numeros.length;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros); // 3