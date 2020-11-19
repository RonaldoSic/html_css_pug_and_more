/* C30. alert, confirm y prompt */
// console.clear();
// console.log(window);
/*Sonb ojetos que cuegan del objeto global de window
pero no es necesario indicarlos sino solo, el nombre
de la funcion que se quiere ejecutar.*/

// window.alert('Esto es una alerta')
// confirm('Hola esto es un confirmacion')
// prompt('Ingreso de datos: ')

// let alerta = alert('Hola esto es una alerta'),
//   confiramcion = confirm("Esto es una confiramcion"),
//   aviso = prompt("esto es un aviso, y le permite al usaior ingresar un valor");

// console.log(`Valor del alert ${alerta} \n
// Valor de la confirmacion ${confiramcion} \n
// Valor del ingreso de datos ${aviso}`)

/* C31. Expresiones regulares */
/*https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions*/

/*  Funcion constructura para la expresion regular, esta
funcion necesita dos valores una es la expresion, y otra es la 
bandera*/

// let cadena = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum dolorem`;

/*Comodines 

Indicadores de expresión regular

g	Búsqueda global.	RegExp.prototype.global
i	Búsqueda que no distingue entre mayúsculas y minúsculas.	RegExp.prototype.ignoreCase
m	Búsqueda multilínea.	RegExp.prototype.multiline
s	Permite que el . coincida con caracteres de nueva línea.	RegExp.prototype.dotAll
u	"unicode"; tratar un patrón como una secuencia de puntos de código Unicode.	RegExp.prototype.unicode
y	Realiza una búsqueda "pegajosa" que coincida a partir de la posición actual en la cadena de destino. Consulta sticky.	RegExp.prototype.sticky


Forma de expresar o invocar la expresion regular forma 1
*/
// let expReg = new RegExp("lorem", "ig");
// Segnda manera de ejecutar una expresion regular y la mas usada
// let expReg2 = /lorem/ig;
/* Metodos test retorna un true o false si encuentra lo que se le pide
Metodo exect, verifica de manera mas detallada, retorna un 
arreglo*/ 
// console.log(expReg.test(cadena));
// console.log(expReg.exec(cadena));
// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));
// console.clear()
// let expresionRegular = /[0-9]/ig
// let expresionRegular1 = /lorem{1,2}/gi;
  /* C32. Funciones Anonimas Autoejecutables  en el 
archivo 'conceptos.js' */
// (function (doc, win, con) {
//     console.log("Mi segundo IIFE");
//     console.log(doc);
//   }
// )(document, window, console);


/*C.33 Modulos imprt export en el archivo 'modulos.js'*/



const splitString = (cadena = "", separador = undefined) =>
  // isText = onliText.test(cadena)
  !cadena
    ? console.log("Ingresa una cadena aceptable")
    : separador === undefined
    ? console.war("No ingresaste un separdor para la cadena")
    : console.info(cadena.split(separador));

splitString(
  "Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal Hola que tal",
  " "
);




