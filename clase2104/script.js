//variables

var miVariable1 = "hola soy una variable con var"; //no se usa
let miVariable2 = "variable con let"; //solo vive en el scope declarado
const miVariable3 = "constante cambian los valores";

const hola = "hola bri";
console.log("ñiñiñi"); // es el equivalente a print

//funcion
function myfunction(variable) {
  //la fumcion tiene una declaracion ,
  // en los parentecis van los parametros
  console.log(variable);
  return; //en general las funciones van a retornar algo
}

//funcion flecha
const myArrowFunction = (variable) => variable;

//ejecucion de una funcion
myfunction(8);

const variable = true;
//condicilnal con f
if (varibale) {
  console.log(true);
} else {
  console.log(false);
}

//condicional ternario sirve solo para dso clausulas
variable ? console.log(true) : console.log(false);

//arreglos o arrays
//los arrglos son las listas de python ç
const arr = [1, true, "hola como va", 0, 1, 2];

console.log(arr[1]);

console.log(`esta es la pocicion 1 del arrgeo es, ${arr[1]}`);

//objetos
//los objetos son como los diccionarios en python
const objeto = {
  clave: "valor",
};

// los objetos ewstan compuestos por clave valor
console.log(objeto.clave);

//bucle for

const arrayNumeros = [1, 2, 3];

for (let i = 0; i < arrayNumeros, length; i++) {
  console.log(arrayNumeros[i]);
}
