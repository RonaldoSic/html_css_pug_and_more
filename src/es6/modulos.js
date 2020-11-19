/*
  C.33 Modulos imprt export.
  Para poder realizar el import en los navegadores, es 
  necesario colocar una etiqueta nueva al script en el 
  html que se llama 'type' y asignarle el valor de
  "module" p.j
<script src="../jsweb.js" type="module"></script>
Y para cargar el siguiete archivo donde se coloca la parte modular
se hace lo siguiente para el siguiente script
<script src="../modulos.js" nomodule></script>
Esto hace que el archivo no se cargue por parte del navegador 
sino esta esperando ser invocado por otro script
*/

// Importamos el codigo
import { PI, user, password, saludar, Saludar } from "./constantes.js";
// para usar alias se puede usar con la palabra 'as
import { artitmetica as calc} from "./aritmetocas.js";
console.log(PI)
console.log(user)
console.log(password)

console.log(calc.sumar(4, 5));

saludar();

let saludo = new Saludar();
saludo;

// alert('Module ok')