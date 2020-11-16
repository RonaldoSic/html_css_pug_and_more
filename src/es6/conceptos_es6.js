// DATOS COMPUESTOS
/*  1.Funciones
    Funciones declaradas vs funciones expresadas
*/
funcionDeclarada ();
function funcionDeclarada(){
  console.log(`Esto es una fucncion declarada puede ser invocada 
  en cualquier parte del codigo, incluso antes de que este declarada`);
}
// Funcion anonima
const funcionExpresada = function () {
  console.log(`Esto es una funcion anonima o expresada, es decir 
  una funcion que se ha asignado como valor a una variable, si lo invicamos antes de que se declre JS nos dira "Cannot access 'funcionExpresada' before initialization" ...('No es posible acceder a una funcion 
  antes de ser inicializada')`);
}
funcionExpresada()

/* 2.Arreglos (Arrays) */
const arregloBacio = []
console.log(arraeglos)

const diasSemana = ['Lunes', 'Martes', 'Miercoles',
  'Jueves', 'Viernes', 'Sabado', 'Domingo'];
console.log(diasSemana);

const multiData = [1, true, 'Texto', ['A', 'B', 'C', [1,2,3]]]
console.log(multiData)
console.log(multiData[3][2])
console.log(multiData[3][3][2])

// "Array.of" nos permite llenar elementos en un arreglo
const otroMultiData = Array.of("X", "Y", "Z", 9, 8, 7)
console.log(otroMultiData);
// "Array(n).fill('value')" Nos llena un arraglo las 'n' veces con el valor que deseamos p.j
const arregloMismoValor = Array(20).fill(false);
console.log(arregloMismoValor)
// Metodos de los arreglos
// Metodo "push" colca un valor al final del ultimo elemento del arreglo
const colores = ['Azul', 'Amarillo']
colores.push('Negro')
console.log(colores)
// Metodo "pop" quita el ultimo elemento del arreglo
colores.pop()
console.log(colores)
// "forEach" Nos permite ejecutar una funcion por cada elemento que tenga el arreglo
// const colores = ['Azul', 'Amarillo']
colores.forEach(function(elemento) {
  console.log(`Esto es el elemento del arreglo ${elemento}`);
});


// Objetos
/* Un objeto es una coleccion de llaves y valores, 
  las variables se les van a llamar atributos/propiedades y
  las funcioes se les llaman metodos */
const person = {
  nombre: "Ronaldo",
  apellido: "Sic",
  edad: 23,
  Pasatiempos: ["Maquetar", "Programar", "Escuchar Musica"],
  casado: false,
  contacto: {
    email: "ronysic13@gmail.com",
    facebook: "Ronald Vasquez",
    movil:"502 8712-1244"
  },
  saludar: function (){
    console.group("Hola")
  }, 
  decirMiNombre: function (){
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    // La palabra 'this' hacer referencia al objeto que se esta usando justamente ahora
  }
}
// Imprimimos el objeto completo
console.log(person)
// Imprimimos valores especificos del objeto de manera menos usual
console.log(`${person["apellido"]} ${person["nombre"]}`);
// Imprimimos los 
console.log(`Hola soy ${person.nombre} ${person.apellido}
  y ando ${person.Pasatiempos[2]}, puedes contactarme por mi facebook como 
  ${person.contacto.facebook}`);
// Este es el modo como accedemos a los metodos dentreo de un objeto
person.saludar()
person.decirMiNombre()

console.log(Object.keys(person))
console.log(Object.values(person))
// Pregunta si un obj tiene esa propiedad retorna true o false 
console.log(person.hasOwnProperty("nombre"))

// Tipos de operadores Ariteticos en js
let operacion = 5 + 5 - 10 * 3;
console.log(operacion)
// Modulo, retorna el residuo sin la parte fraccionario
let modulo = 5 % 2;
console.log(modulo)
/* Operadores relacionales: >, <, >= , <=, ==, ===, !=, !== */ 

console.log(9 > 23)
console.log(23 > 9)
console.log(9 >= 11)
/*
  = -> Un igual es asignacion de variable
  == -> Dos igual es comparacion de valores
  === -> Tres igual es comparacion de tipo de datos y de valor
 */
console.log(0 == false)
console.log("4" == 4)
console.log(5 == 5)

console.log(0 === false)
console.log("4" === false)
console.log(5 === 5)

// Operadores de incremento y decremento
let incremento = 1;
incremento += 2;
console.log(incremento)
let decremento = 1;
decremento -= 3;
console.log(decremento)
incremento *= 3;
console.log(incremento)
decremento /=2;
console.log(decremento)

// Operador incremento y decremento unitario 
incremento ++;
decremento --;
console.log(incremento)
console.log(decremento)
++ incremento;
-- decremento;
console.log(incremento);
console.log(decremento);

// Operadores logicos
/* 
  ! -> Not: Niega lo que es verdero a falso o viceversa.
  || -> Or: Cuando hay dos o mas condiciones con que una se cumpla,
        es decir sea verdadera el OR valida como verdadero.
  && -> And: Cuando hay 2 o mas condiciones todas tienenn que cumplirse, es
        decir todos tienen que ser verdadera para que AND se valide.  
*/
console.log(!true)
console.log(!false)

console.log(9 === 9 || "9" === 9)
console.log(10 === 10 && "9" === 9)


/* CONDICIONALES 
  Una estructura de control permite controlar el flujo de ejecucion del codigo
*/ 

// if - else
let edad = 17;
if (edad >= 18) {
  console.log('Eres mayor de edad')
}else{
  console.log("Eres menor de edad");
}

// if - else if - else

/* 
  Dejame Dormir -0hrs - 5Hrs
  Buenos dias 6hrs - 11 hrs
  Buenas tardes 12hrs - 18hrs
  Buenas noches 19hrs - 23hrs  
*/
let hora = 5;
if (hora >= 0 && hora <= 5) {
  console.log('Dejame Dormir')
} else if (hora >= 6 && hora <= 11) {
  console.log('Buenos dias')
} else if (hora >= 12 && hora <= 18) {
  console.log('Buenas Tardes')  
} else {
  console.log('Buenas Noches')
}
/* Operador ternario, solo permite ejecutar una linea de codigo despues de que 
  el resultado es verdadero o falso */ 
// (condicion) ? verdadero: falso

console.log("Operador ternario")
let eresMayor = (edad >= 18) ? 'Eres mayor de edad' : 'Eres menor de edad';
console.log(eresMayor)

// switch - case
/* 
  Domingo -> 0
  Lunes -> 1
  Martes -> 2
  Miercoles -> 3
  Jueves -> 4
  Viernes -> 5
  Sabado -> 6
*/
let dia = 3 
switch (dia) { 
  case 0: 
    console.log('Domingo')
    break;  
  case 1: 
    console.log('Lunes')
    break;  
  case 2: 
    console.log('Martes')
    break;  
  case 3: 
    console.log('Miercoles')
    break;  
  case 4: 
    console.log('Jueves')
    break;  
  case 5: 
    console.log('Viernes')
    break;  
  case 6: 
    console.log('Sabado')
    break;  
  default:
    console.log('El dia no existe')
    break;
}

/* Ciclos. 
   los primeros 2 while y do-while ya son algo que no es frecuente usarse */ 
// while
let contador = 0;
while (contador < 10) {
  console.log(`Contador en el while ${contador}`);
  contador++;
}
// do-while
// do {
//   console.log(`Contador en el ciclo do-while ${contador}`);
//   contador--;
// } while (contador < 0);

// for
for (let index = 0; index < 20; index++) {
  console.log(index)  
}
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < numeros.length; i++) {
  const element = numeros[i];
  console.log(element)  
}

// for - in, Especial para recorrer propiedades de un objeto primitivo
const humano = {
  nombre: "Ronaldo",
  genero: "Masculino",
  edad: 23
}
// En el forin no funciona la propiedad del . para acceder a los atributos se usan los corchetes
for (const propiedad in humano) {
  console.log(`Key: ${propiedad}, Value: ${humano[propiedad]}`)
}

// for - of, Puede recorrer cualquier propiedad de cualquier objeto que sea iterable
let cadena = "Hola mundo"
for (const caracter of cadena) {
  console.log(caracter)
}


/* MANEJO DE ERRORES EN JS */
try {
  console.log('En el try se agrega el codigo a evaluar')
  varibleInexistente
  console.log(num)
} catch (error) {
  console.log(`En el catch captura cualquier error que surga en el try ${error}`)  
} finally { 
  console.log('En el bloque finally se ejecuta siempre al final de un bloque try-catch')  
}

// Propios mensajes de error, personalizados
try {
  let numero = 'a';
  if (isNaN(numero)) {
    throw new Error("El caracter no es un Numero")
  }
  console.log(numero * numero)
} catch (error) {
  console.log(`Se produjo este error: ${error}`)
}


/* BREAK: Se sale o rompe la estructura de controlo en la que fuen invocada
 Y CONTINUE: el uso en los bucles lo que hace es saltar la iteracion */
const arregloNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
for (let i = 0; i < arregloNumero.length; i++) {
  if (i === 5 ) {
    break
  }
  console.log(`Uso del break ${arregloNumero[i]}`);  
}

for (let i = 0; i < arregloNumero.length; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`Uso del continue ${arregloNumero[i]}`);
}

/* DESUSTRUCTURACION: es una nueva forma de asignar valores a arreglos o
 objetos,  */
// Con arreglos
const num = [1, 2, 3]
// Sin destructuracion
// let uno = num[0], dos = [1], tres = num[2];
// console.log(uno,dos,tres)
// Con destructuracion
const [one, two, three] = num;
console.log(one, two, three)

const personas = {
  nombre: 'Ronaldo',
  apellido: "Sic",
  edad: 23
}
/*Para que esto funcione es necesario que las variables se llamen iguales en
las propiedadades*/ 
let { nombre, apellido, edad } = personas;
console.log(nombre, apellido, edad)

/* OBJETOS LITERALES: una nueva forma de escribir atributos o metodos */
let nombre = 'Allen', edad = 1;
// const perro = {
//   nombre: nombre,
//   edad: edad,
//   ladrar: function () {
//     console.log("Guauu Guauu!!!")
//   }
// }

// console.log(perro)
// perro.ladrar()

const dog = {
  nombre,
  edad,
  raza: "callejero",
  ladrar() {
  console.log("Guauu Guauu Guauu!!!");
  }
};
console.log(dog)
dog.ladrar()


/* PARAMETROS 'REST' Y OPERADOR 'SPREAD' */

/* REST: forma de que se agrgen de forma virtual parametros infinitos a una
funcion o a una variable, para definirlos se usan los '...' */

function sumar(a, b, ...c) {
  let resultado = a + b;
  c.forEach(function (num) { 
    resultado += num;
  })
  return resultado
}

console.log(sumar(1,3))
console.log(sumar(1,3,2,1,3))
console.log(sumar(1,3,2,1,3,20,23,1))

/* SPREAD: se puede estar ejecutando en cualquier sentencia del codigo */
const equipo1 = ['Jose', 'Maria', 'Sonia']
const equipo2 = ['Marcos', 'David', 'Mario']
const equipo3 = ['Elizabeth', 'Cristina', 'Miguel']
const equipo4 = [...equipo1, ...equipo2, ...equipo3]
console.log(equipo1, equipo2, equipo3)
console.log(equipo4)







