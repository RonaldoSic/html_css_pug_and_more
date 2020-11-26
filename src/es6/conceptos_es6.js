// https://github.com/jonmircha/youtube-js
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


/* C13. CONDICIONALES 
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

/* C14. Ciclos. 
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


/* C15. MANEJO DE ERRORES EN JS */
try {
  console.log('En el try se agrega el codigo a evaluar')
  varibleInexistente
  console.log(num)
} catch (error) {
  console.log(`En el catch captura cualquier error que surga en el try ${error}`)  
} finally { 
  console.log('En el bloque finally se ejecuta siempre al final de un bloque try-catch')  
}

// C16. Propios mensajes de error, personalizados
try {
  let numero = 'a';
  if (isNaN(numero)) {
    throw new Error("El caracter no es un Numero")
  }
  console.log(numero * numero)
} catch (error) {
  console.log(`Se produjo este error: ${error}`)
}


/* C17. BREAK: Se sale o rompe la estructura de controlo en la que fuen invocada
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

/* C18. DESUSTRUCTURACION: es una nueva forma de asignar valores a arreglos o
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

/* C19. OBJETOS LITERALES: una nueva forma de escribir atributos o metodos */
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


/* C20. PARAMETROS 'REST' Y OPERADOR 'SPREAD' */

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

/* C21. Arrow Funtions: es una implementacion para las funciones 
y se concidera mas expresivas en sintaxis, es una nueva forma de definir
funciones anonimas que sean expresadas */
// Funcion expresada son arrow function
const saludar = function () { 
  console.log('Hola')
}
saludar();
/* Si la funcion solo tiene una linea de codigo dentro se puede omitir las
  llaves, y si recibe una variables se pueden omitir los parentesis, pero
  si no tiene parametros o mas de uno si se coloca los parentesis */ 
// Funcion expresada, Version con arrow function

// const saludarArrowFunction = (nombre)=> console.log(`Hola x2 ${nombre}`)
const saludarArrowFunction = nombre => console.log(`Hola x2 ${nombre}`);
// const saludarArrowFunction = () => {
//   console.log('hola')
// }
saludarArrowFunction('Noe')

const arregloNumerico = [1, 2, 5, 2, 5, 6]
arregloNumerico.forEach((ele, index) => console.log(`Elemento ${ele} esta en posicion ${index}`))

// Las arrow funcion capturan el objeto this en el contexto que se encuentre, p.j
// const perros = {
//   nombre: 'Allen',
//   ladrar: function () {
//     console.log(this)
//   }
// }
// perros.ladrar()

// Se salta el contexto del objeto donde se declaro y va hasta el contexto del padre 
// const perros = {
//   nombre: "Allen",
//   ladrar: () => {
//     console.log(this);
//   },
// };
// perros.ladrar();
// No es recomendable usarlo para declarar en los objetos literales, por el inconveniente del obejeto this, y se sugiere que se exprese asi.
const perros = {
  nombre: "Allen",
  ladrar()  {
    console.log(this);
  },
};
perros.ladrar();

/* C22. Prototipos: es un mecanismo por el cual un Objeto puede heredar
 atributos y metodos. */

/*POO: los conceptos muy importantes que son 
  Clases -> Modelo a seguir.
  Objetos -> Es una instancia de una clase.
    Atributos -> Es una caracteristica o propiedad del objeto (Son variables de un objeto)
    Metodos -> Son las acciones que un objeto puede realizar (Gramaticalmente son verbos, son funciones de un objeto)    
   */

// const animal = {
//   nombre: 'Gato',
//   sonar() {
//     console.log('Hace un sonido porque esta vivo')
//   }
// }
// console.log(animal)

/* Funcion constructora, solo se genera una vez y a partir de esto se hacen nuevas instancias de los datos pero todos los atributos y metodos tienen que
colgar de la palabra this, y no usar el arrow function que se pierde 
el contexto del this.

Lo idel es que solo se tengan los atributos en esas funciones constructuras, y 
los metodos se los pegamos a los prototipos para ahorra memoria

*/ 

// function Animal(nombre, genero) {
//   // Atributos de la funcion constructura
//   this.nombre = nombre;
//   this.genero = genero;
//   // Metodos
//   this.sonar = function () {
//     console.log('Hace un sonido porque esta vivo')
//   }
//   this.saludar = function () {
//     console.log(`Hola me llamo ${this.nombre}`);
//   }
// }

// // Instancias de las funciones constructoras
// const gato = new Animal('SR. Gato', 'Macho'),
//   perro = new Animal('SR. Allen', 'Macho');

// console.log(gato)
// console.log(perro)
// gato.saludar()
// perro.sonar()

// Funcion constructora donde asignamos los metodos al prototipo , no a la funcion como tal
function Animal(nombre, genero) {
  // Atributos de la funcion constructura
  this.nombre = nombre;
  this.genero = genero;  
}
// Metodos agrgados al prototipo a la funcion constructora
Animal.prototype.sonar = function () {
  console.log("Hace un sonido porque esta vivo");
};
Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};
// Instancias de las funciones constructoras
const gato = new Animal("SR. Gato", "Macho"),
  perro = new Animal("SR. Allen", "Macho");

// console.log(gato);
// console.log(perro);
// gato.saludar();
// perro.sonar();

/* C23. Herencia Prototipica */

function Perro(nombre, genero, tamanio) { 
  // Aqui hacemos le relacion de herencia prototipica 
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}
// Perro esta herendando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
// Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () { 
  console.log('Soy un perro y mi sonido es un ladrido')
}
// Funciones propias de la clase perro 
Perro.prototype.ladrar = function () {
  console.log("Guauuu Guauuu");
}


const snoopy = new Perro("Snoopy", "Macho", "Mediano")
const box = new Animal("Bunny", "Macho")
console.log(snoopy)
console.log(box)

snoopy.saludar()
snoopy.sonar()

box.saludar()
box.sonar()

/* C24. Clases y Herencia, no exiten las caracteristicas de los modificadores
de accesos como lo son los de 'Public' 'Private' y 'Protected',
no exitesn las clases abstractas en JS, Todo lo que es Un objeto JS lo basa en
prototipos */

class Animal { 
  // El constructor es un metodo especial que se ejecuta en el momento de instaciar la clase
  constructor(nombre, genero) {
    // Atributos
    this.nombre = nombre
    this.genero = genero  
  }
  // Metodos
  sonar() {
    console.log('Hago un sonido por que estoy vivo, Class')
  }
  saludar() {
    console.log(`Hola me llamo ${this.nombre}`)
  }
}

// const mimi = new Animal("Mimi", "Hembra"),
//   scooby = new Animal("Scooby", 'Macho')
// console.log(mimi)
// console.log(scooby)
// mimi.saludar()

// Herencia en clases
class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    // Super es un metodo que manda a llamar el constructor de la clase padre    
    super(nombre, genero);
    this.tamanio = tamanio;
    this.raza = null;
  }
  // Sobreescritura de metodos en clases
  sonar() {
    console.log('Soy un peroo y mi sonido es un ladrido')
  }
  // Metodos propios de la clase
  ladrar() {
    console.log('Guauu, Guauu')
  }
  // Metod estatico, se puede ejecutar sin necesidad de de instanciar la clase
  static queEres() {
    console.log(`Los perros somos animales mamiferos que pertenecemos en la familia de los caninos.
    Somos considerados los mejores amigos del hombre.`)
  }
  /* C25. Metodos estaticos Getters y Setters */ 
  /* Los metodos "setters" y "gettesr" son metodos especiales que nos 
  permiten establecer y obtener los valores de atributos de nuestra clase */
  get getRaza() {
    return this.raza
  }
  set setRaza(raza) {
    this.raza = raza;
  }
}
// Llamando el metod estatico de perro
Perro.queEres()


const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", 'Macho', "Gigante")
console.log(mimi)
mimi.saludar()
mimi.sonar()

console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()
// Usanodo los metodo Get y Set y JS los trata como un atributo 
/* Uso normalmente en otros lenguajes de programacion seria asi:*/
// ESTO NO ES VALIDO EN JS
// scooby.setRaza("La raza")
// scooby.getRaza()
/*Esta manera de arriba genera un error en js la manera adecuada 
de usar los metodos get y set es de la siguiente manera */
scooby.setRaza = 'Gran Danes';
console.log(scooby.getRaza);

/* C26. Objeto console */
console.log(console)
console.error('Esto es un error')
console.warn('Esto es un aviso')
console.info('Esto es una informacion')
console.log('Es com un registro de lo que ha pasado en nuestra aplicacion')

let nombre = 'Ronaldo', apellido = "Sic", edad = 23;
// console.log(nombre)
// console.log(apellido)
// console.log(edad)
console.log(`Te doy la bienvenido soy ${nombre} ${apellido} y tengo ${edad} anos`)

// Comodines para la impresion en variablas
/* 
  %s -> Indica que es una cadena
  %d -> Indica un numero o digito
*/
console.log(`Hola mi nombre es %s %s y tengo %d anos`, nombre, apellido, edad)
console.clear()
/* Estos console funciona para el Navegador no para los que se ejecutan 
desde Node */
// console.log(window)
// console.log(document)
// console.dir(window)
// console.dir(document)

// Grupos en la consola esto es ideal para los navega
console.group('Titulo del grupo de los console.log')
console.log('Item 1')
console.log('Item 2')
console.log('Item 3')
console.groupEnd()

console.groupCollapsed('Tutulo de un grupo Collapsado')
console.log('Item 1')
console.log("Item 2");
console.log("Item 3");
console.groupEnd()


// Tablas en console
// El metodo entries lo que hace es una nueva fila, y el sort es para ordenarlos alfabeticamente
console.table(Object.entries(console).sort())
const arregloNumeros = [1, 2, 3, 4, 5]
const arregloVocales = ['a', 'e', 'i', 'o', 'u']
console.table(arregloNumeros)
console.table(arregloVocales)

const pc = {
  marca: 'hp',
  color: 'negro',
  peso:'1.3 lbs'
}
console.table(pc)

// Uso del console time, Tiene que ser el mismo mensaje de inicio y final ya que es como un aleas en js
console.time('Cuanto tiempo tarda mi codigo')
// const arreglo = Array(1000000)
// for (let i = 0; i < arreglo.length; i++) {
//   arreglo[i] = i;  
// }
console.timeEnd('Cuanto tiempo tarda mi codigo')
// console.log(arreglo)

// Para saber que tanto se ha repetido un fragmento de codigo
for (let i = 0; i < 100; i++) {
  console.count('Contador del for')
  console.log(i); 
}

// Forma de hacer una pequena prueba
let x = 1, y = 2, pruebaXY = "Se espera que X siempre sea menor que Y"
console.assert(x>y,{x,y,pruebaXY})

/* C27. Objeto Date*/
// console.log(Date())
let fecha = new Date();
// Dia del mes
console.log(fecha.getDate())
/* Representa el dia de la seman 
  [D,L,M,M,J,V,S] -> 0,1,2,3,4,5,6*/ 
console.log(fecha.getDay())
/* Representa el mes del ano
  [Ene, Feb, Mar, Abr, May, Jun, Jul, Ago, Sep, Oct, Nov, Dic] -> 
  0,1,2,3,4,5,6,7,8,9,10,11*/ 
console.log(fecha.getMonth())
/* Nos da el ano en el que estamos */
console.log(fecha.getFullYear())
/* Para Optener el tiempo se pueden usar los metodos */
console.log(fecha.getHours()) //Formato 24hs
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())

// Metodos para obtener la fecha de manera visual y acertada
let fecha = new Date();
console.log(fecha.toString())
// Extraer partes especificas de la fecha en formato string
console.log(fecha.toDateString())
console.log(fecha.toLocaleString())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
// console.log(fecha.getTimezoneOffset())
// Horas en londres
console.log(fecha.getUTCDate())
// Fecha en formato time stamp
// 1979 -> Indica cuanto segundos ha pasado desde ese anio desde el 1ro de enero 
let cumpleRony = new Date(1997,5,11)
console.log(Date.now())
console.log(cumpleRony)

/* C.29 Objeto Math*/ 
console.log(Math)
console.log(Math.PI)
console.log(`Valor absoluto de un numero ${Math.abs(-7.3)}`)
console.log(`Redondea un numero posterior (mayor) inmediato ${Math.ceil(3.3)}`)
console.log(`Redondea un numero anterior (menor) inmediato ${Math.floor(9.7)}`)
console.log(`Redondea un numero de forma mas equitativa ${Math.round(7.48)}`)
console.log(`Raiz cuadrada de un numero ${Math.sqrt(81)}`)
console.log(`Potenciar un numero, en la funcion el primer numero es la base
el segundo es la potencia ${Math.pow(5,3)}`)
console.log(`Indica si el numero es Positivo, Negativo o Cero R-> ${Math.sign(0.2)}
Si es un numero negativo retorna siempre -1 y si es positivo retorna 1 simepre
y si es cero dara como resultado 0 siempre`)


// Metodos Random
console.log(`Siempre retorna un numeoro aleatorio entre 0 y 1 ${Math.random()}`);
// Para obtener un valor entre 100 o 1000, lo que se hace es multiplicarlos por ese numero que se quiere obtener p.j
console.log(`Numero aleatorio enter 1 y 100 con decimal ${Math.random() * 100}`);
// Para quitar la parte de los numero despues del numero decial se usa un metodo para redondear como puede ser el round
console.log(`Numero aleatorio enter 1 y 1000 sin decuimal 
  ${Math.round(Math.random() * 1000)}`);

/* C.29 Operador de Corto circuito: funcionan colocando 2 condiciones ya sea
que se usan los operadores OR o And  */
/* 
CORTOCIRCUITO OR -> cuando el valor de la izquierda en la expresion
siempre puede validar a true, es el valor que se cargara por defecto.

CORTOCIRCUITO AND -> cuando el calor de la izquierda en la expresion siempre
puede validar a false, es el valor que se cargara por defecto.
*/

// P.J Esto es lo que Implemento es6 y se llama parametro por defecto
function saludar(nombre = 'Desconocido') {
  console.log(`Hola  ${nombre}`);
}
saludar()
saludar("Ronaldo")
// Usnao un operador cortocircuito antes de que exitiese los parametros por defecto

function saludar2(name) {
  // Esta linea 771 es el operador cortocircuito
  name = name || 'Desconocido';
  console.log(`Hola salu2 ${name}`)
}

saludar2()
saludar2('Ronaldo')

// Corto circuito con OR
console.log("Todo lo que da verdadero" || "Valor de la derecha")
console.log(19 || "Valor de la derecha")
console.log(true || "Valor de la derecha")
console.log([] || "Valor de la derecha")
console.log({} || "Valor de la derecha")
console.log(false || "Valor de la derecha")
console.log("" || "Valor de la derecha")
console.log(-2 || "Valor de la derecha")
console.log(0 || "Valor de la derecha")
// Corto circuito con AND
console.log("Todo lo que da verdadero" && "Valor de la derecha");
console.log(19 && "Valor de la derecha");
console.log(true && "Valor de la derecha");
console.log([] && "Valor de la derecha");
console.log({} && "Valor de la derecha");
console.log(false && "Valor de la derecha");
console.log("" && "Valor de la derecha");
console.log(-2 && "Valor de la derecha");
console.log(0 && "Valor de la derecha");

// Continuacion del contenindo en el archivo 'jsweb.js' 

/* C32. Funciones Anonimas Autoejecutables. 
Lo que esta en los promeros parentecis indica la declaracion de la funcion,
lo que esta en el segundo parentesis indica la ejecucion de esa funcion sin 
nombre. Un ejemplo de esa funcion puede ser
    function mensaje (){ }
    mensaje () 

    Ya hecho en anonima queda asi:
    ( function () {}) (//Indica la ejecucion de inmediato)
*/

(//Aqui est la funcion anonima
  function () {
    console.log('Mi primer funcion Auto ejecutable IIFE')
  }
)
  (//Aqui indica la auto ejecucion de la funcion anonima de manera inmediato
  );
// Esto se usa mas para crear modulos de JS para el navegador
(function (doc, win, con) {
  console.log('Mi segundo IIFE')
  console.log(doc)
})('document', 'Window', 'Console')
/* Formas de escribir las funciones Anonimas Autoejecutablase */
// Clasica 
(function () {
  console.log('Fomar clasica de crear una FAA')
})();

// La Crockford (JavaScript The Good Parts)
((function () {
  console.log('Version Crockford')
})());

// Unario
+function () {
  console.log('Version Unario');
}();

// Facebook
!function () {
  console.log('Version Facebook')
}();

// C.33 en el archivo jsweb, modulos en el navegador 


/* C.34 Ejercicios de programacion 1/10 */
/* EJERCICIO 1
  1) Programa una función que cuente el número de caracteres de una cadena de 
  texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/ 
let onliText = /[a-z || A-Z]/; //Expresio para validar solo cadena de textos
let isText = false, isNum = false;
let onliNum = /[0-9]/
const contadorCaracteres = (cadena = "") => {
  isText = onliText.test(cadena)
  isText
    ? console.log(`El tamanio de la caden ${cadena} es de ${cadena.length}`)
    : console.log('Lo que ingresaste no es una cadena')
}
// contadorCaracteres("Ronaldo Sic")
// contadorCaracteres()

/* EJERCICIO 2 
  2) Programa una función que te devuelva el texto recortado según el número de 
  caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/ 
const textoRecortado = (texto = "", numCarcter = undefined) => {  
  isText = onliText.test(texto);
  isNum = onliNum.test(numCarcter);  
  (!isText) ? console.log('Ingresa una cadena valida')
    : (numCarcter === undefined)
      ? console.log('Ingresa un numero validao para recortar la cadena')
      : console.log(`El resultado es ${texto.slice(0, numCarcter)}`)
}
// textoRecortado('Ronaldo', 3)
// textoRecortado()
// textoRecortado('k')
// textoRecortado("",3)

/* EJERCICIO 3
  3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']. */ 
const splitString = (cadena = "", separador = undefined) => 
  // isText = onliText.test(cadena)
  (!cadena)
    ? console.log('Ingresa una cadena aceptable')
    : (separador === undefined)
      ? console.log('No ingresaste un separdor para la cadena')
      // : console.log(`El resultado es ${cadena.split(separador)}`)
      : console.log(cadena.split(separador))

splitString('Hola que tal', ' ')


/* Ejercicio 4
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */
const repitCadenas = (cadena = "", repeticiones = undefined) => {
  if (!cadena || repeticiones === undefined || repeticiones === 0 || Math.sign(repeticiones) === -1) return console.warn('Verifica que los parametros sean correctos')
  for (let i = 1; i < repeticiones; i++) console.log(`${cadena}, ${i}`)
}
// repitCadenas ('Ronaldo', 4)
// repitCadenas ('', 4)
// repitCadenas('', -3)

/*  EJERCICIO 5
5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
const invertirCadenas = (cadena = "") => {
  (!cadena) ? console.log('Ingresa una cadena valida')
    : console.log(cadena.split('').reverse().join(''))
}
// invertirCadenas("Ronaldo Sic")
// invertirCadenas();

/*  EJERCICIO 6
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
const contadorPalabrasRepetidas = (cadena = "", busquda = "") => {
  if (!cadena) return console.log('Ingresa una cadena de texto valida')
  if (!busquda) return console.log("No has ingresado la palabra a buscar")
  let i = 0, contador = 0;
  // Indexof retorna -1 si no encuetra el valor a buscar por eso en el while es validado en -1
  while (i !== -1) {
    i = cadena.indexOf(busquda, i);
    if (i !== -1) {
      i++;
      contador++;
    }    
  }
  return console.log(`La palabra ${busquda} se repite ${contador} veces`)
}

// contadorPalabrasRepetidas()
// contadorPalabrasRepetidas("Hola mundo, adios mundo", "")
contadorPalabrasRepetidas("Hola mundo, adios mundo, sin mundo, el mundo ya valio burger jeje, no hay mas mundo", "mundo")

/*  EJERCICIO 7
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
const palindromos = (cadena = "") => {
  if (!cadena) return console.log("Ingresa una cadena de texto valida");
  cadena = cadena.toLowerCase();
  // Aqui se transforma la palabra de manera reversa
  let alReves = cadena.split('').reverse().join('');

  return cadena === alReves
    ? console.log(
        `Si es palindromo, palabra original ${cadena}. Palabra al reves ${alReves}`
      )
    : console.log(
        `No es palindromo, palabra original ${cadena}. Palabra al reves ${alReves}`
      );
}

// palindromos('SalAs')
// palindromos('Oso')

/*  EJERCICIO 8
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */
const eliminarPatrones = (cadena = "", patron = "") => 
  (!cadena)
    ? console.log("Ingresa una cadena de texto valida")
    : (!patron)
      ? console.log("Ingresa un patron para buscar")
      : console.log(cadena.replace(new RegExp(patron, "ig"), ""))

// eliminarPatrones()
// eliminarPatrones("xyz")
// eliminarPatrones("", "juo")
eliminarPatrones("xyz3, xyz4, xyz5, xyz6", "xyz")

/*  EJERCICIO 9
9) Programa una función que obtenga un numero aleatorio entre 501 y 600.*/
const numAleatiorio = () => console.log(Math.round((Math.random() * 100) + 500))
numAleatiorio()

/*  EJERCICIO 10
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.*/
const numeroCapicua = (numero = 0) => {
  if (!numero) return console.log('No ingresaste un numero')
  if (typeof numero !== 'number') return console.error(`El valor ${numero} ingresado NO es un numero`)
  // Convertir el numero a cadena 
  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");
  
  // return (parseFloat(numero) === parseFloat(alReves))
  return (numero === alReves)
    ? console.log(
        `Si el numero es Capicua, numero original ${numero}, numero capicua ${alReves}`
      )
    : console.log(
        `No el numero es Capicua, numero original ${numero}, numero capicua ${alReves}`
      );
}

// numeroCapicua('2')
// numeroCapicua()
// numeroCapicua('a')
// numeroCapicua(432)
// numeroCapicua(404)
// numeroCapicua(2000)
// numeroCapicua(212.212)

/*  EJERCICIO 11
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.*/
const factorial = (numero = undefined) => {
  if (numero === undefined) return console.log('Ingrea el numero') 
  if (typeof numero !== "number") return console.log('Lo que ingresaste no es un numero') 
  if (numero === 0) return console.log("EL numero no puede ser 0")
  if (Math.sign(numero) === -1) return console.log('El numero no puede ser negativo')

  let factorialNum = 1;
  for (let i = numero; i > 1; i--){
    factorialNum *= i;
  }
  return console.log(`El factorial de numero es ${factorialNum}`)
}

// factorial()
// factorial('2')
// factorial('a')
// factorial([])
// factorial(0)
// factorial(-32)
factorial(4)

/*  EJERCICIO 12
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.*/

const numeroPrimo = (numero = undefined) => {
  if (numero === undefined) return console.log('Ingrea el numero')
  if (typeof numero !== "number") return console.log('Lo que ingresaste no es un numero')
  if (numero === 0 || numero === 1) return console.log("EL numero no puede ser 0 o que sea 1")
  if (Math.sign(numero) === -1) return console.log('El numero no puede ser negativo')
  let divisible = false;
  for (let i = 2; i < numero; i++ ){
    if (numero % i === 0) {
      divisible = true;
      break;
    }
  }
  return (divisible)
    ? console.log(`El numero ${numero} No es Primo`)
    : console.log(`El numero ${numero} Si es Primo`)
}
// numeroPrimo('2')
// numeroPrimo('d')
// numeroPrimo()
// numeroPrimo(0)
// numeroPrimo(-1)
// numeroPrimo(1)
// numeroPrimo(3)
// numeroPrimo(19)
// numeroPrimo(200)

/*  EJERCICIO 13
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.*/
const numeroParOImpar = (numero = undefined) => {
  if (numero === undefined) return console.log('Ingrea el numero')
  if (typeof numero !== "number") return console.log('Lo que ingresaste no es un numero')
  return (numero % 2 === 0) 
    ? console.log(`El numero ${numero} Si es par`)
    : console.log(`El numero ${numero} No es par`)    
}

// numeroParOImpar()
// numeroParOImpar('3')
// numeroParOImpar(0)
// numeroParOImpar(-123)
// numeroParOImpar(2)
// numeroParOImpar(23)


/*  EJERCICIO 14
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.  */
const convertiGrados = (grados = undefined, unidad = undefined) => {
  if (grados  === undefined) return console.log("No ingresaste grados a convertir");
  if (typeof grados !== "number") return console.log(`Lo que ingresaste ${grados} no es un numero`);
  if (unidad === undefined) return console.log("No has ingresado el tipo de grado a convertir");
  if (typeof unidad !== "string") return console.log(`No es una cadena de texto lo que has ingresado ${unidad}`);
  let expresionReg = /(C|F)/; //Si esto no se cumple que no sea la letra C o F se niega
  if (unidad.length !== 1 || !expresionReg.test(unidad) ) return console.log(`Valor de unidad no reconocido ${unidad}`)  

  if (unidad === 'C') return console.log(`${grados}°C = ${Math.round((grados * (9 / 5)) + 32)}°F`)
  
  if (unidad === 'F') return console.log(`${grados}°F = ${Math.round((grados - 32) * (9 / 5))}°C`);  
}

// convertiGrados()
// convertiGrados("2")
// convertiGrados(2)
// convertiGrados(2, true)
// convertiGrados(2, 'Hola')
// convertiGrados(2, 'E')
// convertiGrados(2, 'R')
// convertiGrados(2, 'V')

// convertiGrados(100, 'F')
// convertiGrados(100, 'C')


/*  EJERCICIO 15
15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.*/
const convertirBinarioDecimal = (numero = undefined, base = undefined) => {
  if (numero === undefined || typeof numero !== "number") return console.log('Ingresa un numero correcto o asegurate de enviar un numero')
  if (base === undefined || typeof base !== "number") return console.log('Ingresa un numero de base correcto')

  if (base === 2) {
    return console.log(`El numero ${numero} en base ${base} = ${parseInt(numero, base)} base 10`)    
  } else if (base === 10) {    
    return console.log(`El numero ${numero} en base ${base} = ${numero.toString(base)} base 2`)    
  } else {
    console.log('El tipo de base a converti No es valido')
  }
}
// convertirBinarioDecimal()
// convertirBinarioDecimal('2')
// convertirBinarioDecimal(100)
// convertirBinarioDecimal(100, "2")
// convertirBinarioDecimal(101, 2)
// convertirBinarioDecimal(5, 10)
// convertirBinarioDecimal(5, 3)


/*  EJERCICIO 16
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.*/
const aplicarDescuentos = (monto = undefined, descuento = 0) => {
  if (monto === undefined) return console.log("No has ingresado el monto");
  if (typeof monto !== "number")
    return console.log(`El valor ingresado no es numero`);
  if (monto === 0) return console.log(`EL monto ${monto} no puede ser cero`);
  if (Math.sign(monto) === -1) return console.log(`EL monto ${monto} no puede negativo`);
    
  if (typeof descuento !== "number") return console.log(`El valor del decuento no es un numero`)
  if (Math.sign(descuento) === -1)
    return console.log(`El descuento no puede ser negativo`);
  let elDescuento = monto - (monto * descuento) / 100;
  return console.log(`${monto} - ${descuento}% = ${elDescuento}`);
};

// aplicarDescuentos()
// aplicarDescuentos('200')
// aplicarDescuentos(-2)
// aplicarDescuentos(-3, -2)
// aplicarDescuentos(2, 'e')
// aplicarDescuentos(2, 0)
// aplicarDescuentos(1000, 20)
// aplicarDescuentos(1000)


/*  EJERCICIO 17
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.log('No igresaste una fecha')
  if (!(fecha instanceof Date)) return console.log('El valor que ingresaste no es una fehca valida')
  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  /* 1000 MS por 60 me da minutos, luego * 60 me da las hoaras y * 24 me da 
  los dias, * 365 me da la cantida en anios */
  let aniosEnMilSec = 1000 * 60 * 60 * 24 * 365; 
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMilSec)

  return (Math.sign(aniosHumanos) === -1)
    ? console.log(`Faltan ${Math.abs(aniosHumanos)} anios, para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.log(`Han pasado ${aniosHumanos} anios, desde ${fecha.getFullYear()}`)
      : console.log(`Estamos en el anio actual ${fecha.getFullYear()}`)
}

// calcularAnios();
// calcularAnios({});
// calcularAnios(new Date());
// calcularAnios(new Date(1997,5,11));
calcularAnios(new Date(1998,2,23));
// calcularAnios(new Date(2025,5,11));


/*  EJERCICIO 18
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/
const contarLetras = (cadena = '') => {
  if (!cadena) return console.log('No ingrsaste una cadena de texto')
  if (typeof cadena !== "string") return console.log(`El valor no es una cadena`)
  let vocales = 0, consonantes = 0;
  cadena =cadena.toLowerCase()
  for (let letra of cadena) {
    if (/[aeiouáéíóú]/.test(letra)) vocales++;
    if (/[bcdfghjklmnpqrstvwxyz]/.test(letra)) consonantes++;  
  }
  return console.log({
    cadena,
    vocales,
    consonantes
  })
}

// contarLetras()
// contarLetras(3)
contarLetras('Murcielago y todo los demas esta bien por mi parte')
contarLetras('Ronaldo')


/*  EJERCICIO 19
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */
const validarNombres = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste un nombe")
  if (typeof nombre !== "string") return console.error(`El valor "${nombre}" ingresado, No es una cadena de texto`)
  let expresionReg = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);
  return expresionReg 
    ? console.log(`"${nombre}", es un nombre valido`)
    : console.log(`"${nombre}", No es un nombre valido`)
}
validarNombres()
validarNombres(3)
validarNombres("Ronaldo Sic")
validarNombres("Ronaldo Sic 3")
validarNombres("Ronaldo Sic Vásquez")



/*  EJERCICIO 20
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */
const validarCorreos = (email = "") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string")
    return console.error(
      `El valor "${email}" ingresado, No es una cadena de texto`
    );
  let expresionReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return expresionReg
    ? console.log(`"${email}", es un email valido`)
    : console.log(`"${email}", No es un email valido`);
};

// validarCorreos()
// validarCorreos(9)
// validarCorreos('23qq')
// validarCorreos('ronysic13@gmail.com')

// Expresiones regulares para validar nombre y correos
let expNombres = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g;
let expCorreos = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;

// Funcion 19 y 20 Unificadas
const validarUnPatron = (cadena = "", patron = undefined) => {
  if (!cadena) return console.warn("No ingresaste un cadena");
  if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado, No es una cadena de texto`);

  if (patron === undefined) return console.warn("No ingresaste un patron");
  if (!(patron instanceof RegExp) ) return console.error(`El valor "${patron}" ingresado, No es una patron de texto`);
  // let expresionReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(cadena);
  let expresionReg = patron.test(cadena);

  return expresionReg
    ? console.log(`"${cadena}", Si es un cadena valido`)
    : console.log(`"${cadena}", No es un cadena valido`);
};

// validarUnPatron()
// validarUnPatron('Ronaldo')
validarUnPatron('Ronaldo',expCorreos)
validarUnPatron('ronysic13@gmail.com',expCorreos)

validarUnPatron('Ronaldo', expNombres)
validarUnPatron('rony_sic9@yahoo.com',expNombres)


/*  EJERCICIO 21
21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/
const devolverCuadrados = (array = undefined) => {
  if (array === undefined) return console.warn('No ingresaste un arreglo') 
  if (!(array instanceof Array)) return console.error('Lo que estan ingresando no es un arreglo') 
  if (array.length === 0) return console.error('El arreglo esta vacio') 
  for (let numero of array) {
    if (typeof numero !== 'number') return console.error(`El valor ${numero} no es un numero`);     
  }
  // metodo map genera un nuevo arreglo sin alterar el original
  const newArray = array.map(el => el * el);
  return console.log(`Arreglo original ${array} \nArreglo elevado al cuadrado ${newArray}`)
}

// devolverCuadrados()
// devolverCuadrados(false)
// devolverCuadrados({})
// devolverCuadrados([])
// devolverCuadrados([3,'a', 3, []])
// devolverCuadrados([3, 5, 3, {}])
devolverCuadrados([3,2,1,5,9])



/*  EJERCICIO 22
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */

const numBajoYAltoInArray = (array = undefined) => {
  if (array === undefined) return console.warn("No ingresaste un arreglo");
  if (!(array instanceof Array))
    return console.error("Lo que estan ingresando no es un arreglo");
  if (array.length === 0) return console.error("El arreglo esta vacio");
  for (let numero of array) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }
  return console.info(`Arreglo original ${array}
  Valor mayor: ${Math.max(...array)}
  Valor menor: ${Math.min(...array)}`)
}

numBajoYAltoInArray()
numBajoYAltoInArray([])
numBajoYAltoInArray(false)
numBajoYAltoInArray(['a','2'])
numBajoYAltoInArray(['2',32,1])
numBajoYAltoInArray([9,2,11,-23,3,-11,5,-12,98,-3])


/*  EJERCICIO 23
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const separarParesImpares = (array = undefined) => {
  if (array === undefined) return console.warn("No ingresaste un arreglo");
  if (!(array instanceof Array))
    return console.error("Lo que estan ingresando no es un arreglo");
  if (array.length === 0) return console.error("El arreglo esta vacio");
  for (let numero of array) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }

  return console.log({
    pares: array.filter(num => num%2 === 0),
    impares: array.filter(num => num %2 ===1),
  });
};

separarParesImpares()
separarParesImpares({})
separarParesImpares([])
separarParesImpares(['1'])
separarParesImpares(['1'])
separarParesImpares([2,3,1,'1'])
separarParesImpares([2,3,1,9,2,4,5,1,5,7,10,32])
/*  EJERCICIO 24
24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.*/

const ordenarAscDescArray = (array = undefined) => {
  if (array === undefined) return console.warn("No ingresaste un arreglo");
  if (!(array instanceof Array))
    return console.error("Lo que estan ingresando no es un arreglo");
  if (array.length === 0) return console.error("El arreglo esta vacio");
  for (let numero of array) {
    if (typeof numero !== "number")
      return console.error(`El valor ${numero} no es un numero`);
  }
  return console.log({
    array,
    asc:array.map(num => num).sort(),
    desc:array.map(el => el).sort().reverse(),
  })
}
// ordenarAscDescArray();
// ordenarAscDescArray({});
// ordenarAscDescArray([]);
// ordenarAscDescArray(["1"]);
// ordenarAscDescArray(["1"]);
// ordenarAscDescArray([2, 3, 1, "1"]);
ordenarAscDescArray([1,3,2,5,6,7,8,0,9,4]);




/*  EJERCICIO 25
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].*/

const quitarDuplicados = (array = undefined) => {
  if (array === undefined) return console.warn("No ingresaste un arreglo");
  if (!(array instanceof Array))
    return console.error("Lo que estan ingresando no es un arreglo");
  if (array.length === 0) return console.error("El arreglo esta vacio");
  if (array.length === 1)
    return console.error("El arreglo debe de tener al menos 2 elementos");
  // Codigo funcional v1
  // return console.log({
  //   array,
  //   sinDuplicados: array.filter((value, index, self) => self.indexOf(value) === index),
  // })
  // Codigo funcional v2
  // Tipo de dato 'set' nos permite generar un conjunto de elemenot que no permite datos duplicacdo
  return console.log({
    array,
    sinDuplicados: [...new Set(array)],
  });
}
// quitarDuplicados()
// quitarDuplicados([])
// quitarDuplicados({})
// quitarDuplicados([4])
quitarDuplicados(["x", 10, "x", "10", true, true])



/*  EJERCICIO 26
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.*/

const promedioEnArreglos = (array = undefined) => {
  if (array === undefined) return console.warn("No ingresaste un arreglo");
  if (!(array instanceof Array))
    return console.error("Lo que estan ingresando no es un arreglo");
  if (array.length === 0) return console.error("El arreglo esta vacio");
  for (let numero of array) {
    if (typeof numero !== "number")
      return console.error(`El valor "${numero}" no es un numero`);
  }
  /*Metodo reduce, lo que hace es generar un nuevo arreglo basado en el
    original, */
  return console.log(
    array.reduce((total, num, index) => {
      total += num;
      if (index === array.length - 1) {
        return `El promedio de lista de numero ${array.join(" + ")} es = ${total/array.length}`
      } else {
        return total;
      }
    }),
  );
}

// promedioEnArreglos()
// promedioEnArreglos({})
// promedioEnArreglos([])
// promedioEnArreglos(['a',2])
// promedioEnArreglos([2, true])
promedioEnArreglos([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])








/*  EJERCICIO 27
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
    aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */

class Pelicula {
  constructor({ id, titulo, director, estreno, pais, generos, calificacion }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;
    // Ejecutando los metodos de validacion
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirecctor(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }

  static get getListaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  static generosAceptados() {
    return console.log(
      `Los generos aceptados son: ${Pelicula.getListaGeneros.join(", ")}`
    );
  }

  validarCadenas(propiedad, valor) {
    if (!propiedad) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado no es una cadena`
      );
    return true;
  }

  validarNumeros(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (typeof valor !== "number")
      return console.error(`${propiedad} "${valor}" ingresado no es un numero`);
    return true;
  }

  validarLongituCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor} excede el numero de carcteres permitidos "${longitud}"`
      );
    return true;
  }

  validarIMDB(id) {
    if (this.validarCadenas("IMDB id", id)) {
      if (!/^([a-z]{2}([0-9]){7})$/.test(id))
        return console.error(
          `IMDB id "${id}" no es valido, debe tener 9 caractes, los 2 primeros letras, los 7 restantes numeros`
        );
    }
  }

  validarEstreno(estreno) {
    if (this.validarNumeros("Año de Estreno", estreno)) {
      if (!/^([0-9]){4}$/.test(estreno))
        return console.error(
          `Año de Estreno "${estreno}" no es valido, debe ser un numero de 4 digitos`
        );
    }
  }

  validarTitulo(titulo) {
    if (this.validarCadenas("Titulo", titulo))
      this.validarLongituCadena("Titulo", titulo, 100);
  }

  validarDirecctor(director) {
    if (this.validarCadenas("Director", director))
      this.validarLongituCadena("Director", director, 50);
  }

  validarArreglo(propiedad, valor) {
    if (!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
    if (!(valor instanceof Array))
      return console.error(
        `${propiedad} "${valor}" inrgesado, No es un arreglo`
      );
    if (valor.length === 0)
      return console.error(`${propiedad} "${valor}" no tiene datos`);
    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(`El valor ${cadena} ingresado, No es una cadena`);
    }
    return true;
  }

  validarPais(pais) {
    this.validarArreglo("Pais", pais);
  }

  validarGeneros(generos) {
    if (this.validarArreglo("Generos", generos)) {
      for (const genero of generos) {
        // console.log(`${genero}, ${Pelicula.getListaGeneros.includes(genero)}`)
        if (!Pelicula.getListaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if (this.validarNumeros("Calificacion", calificacion)) {
      return (calificacion < 0 || calificacion > 10)
        ? console.error(`La calificacion tiene que estar en un rango de 0 a 10`)
        : this.calificacion = calificacion.toFixed(1)
      // toFixed indica a cuantos numeros decimales se cora un numero
    }
  }

  fichaTecnica() {
    console.log(
      `Ficha tencnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais.join("-")}"\nGeneros: "${this.generos.join(", ")}"\nCalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"\n`);
  }

}

// Pelicula.generosAceptados()

// const peli = new Pelicula({
//   id: "as3213215",
//   titulo:"Tutilo de la pelicula",
//   director:"Direccor de la pelicula",
//   estreno: 2020,
//   pais: ['Gua', 'Mx', 'Els', 'Usa'],
//   generos: ['Comedy', 'Crime'],
//   calificacion: 3.2231
// });

// peli.fichaTecnica()

const misPeliculas = [
  {
    id: "tt0587558",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1,
  },
  {
    id: "tt8932110",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1,
  },
  {
    id: "tt0584246",
    titulo: "The Dark Knight",
    director: "Cristopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0,
  },
];
misPeliculas.forEach(el => new Pelicula(el).fichaTecnica())

/*  C44. Temporizadores (setTimeout & setInterval)  */
/*  setTimeout: recibe una funcion callback y recibe un tiepo expresado en
      milisegundos, se ejecuta solo una vez, para detenerlos se tiene que 
      almacenar en una variable y sobre esa variable ejeructar el metodo
      'clearTimeout(variable)'.
    setInterval: se ejecuta varias veces a un determinado tiempo que se 
      le coloque, para poder deternelos hay que guardarlos en una variable, 
      y sobre esa varible ejecutar el metod 'clearInterval(variable)' */

console.log('Inicio')
let tiempoOut = setTimeout(() => {
  console.log("Ejecutnado un setTimeout, esto se ejecuta una sola vez");
}, 1000);
clearTimeout(tiempoOut) //Esto detiene la ejecucion del timeOut 

let contador = 0;
let tiempoInterval = setInterval(() => {
  console.log(`Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo, por ahora solo son 10 veces: lleva: ${contador+1} de 10`)
  contador++;
  if(contador >10) clearInterval(tiempoInterval)
}, 1000)

// clearInterval(tiempoInterval)
console.log('Adios')

/*  C.45  Asincronia y el Event Loop  */
  /*  Que es la asincronia? y Como funciona en JS?
      Algunso conceptos>
        * Procesamiento Single thread y Multi thread: No se puende realizar
            largas peticiones sin que bloquee el unico hilo, pero para eso 
            esta las funciones asincronas para evitar todo esto.
            JS solo tiene un hilo de ejecucion, 
        * Operadores de CPU y Operaciones de I/O: Operaciones de CPU: son los que
            van a pasar mas tiempo consumiendo recursos o rendimiento de la CPU,
            Operaciones I/O: Van a pasr mas tiempo esperando por recursos que se
            ha solicitado y esto es los procesos de I/O.
        * Operaciones Concurrentes y Paralelas: Concurrentes; es cuando dos o mas
            tareas progresan simultaneamente, se progresan al mismo tiempo.
            Paralelismo; dos o mas tareas se ejecutan al mismo tiempo.
        * Opreaciones Bloqueantes y No Bloqueantes: se refiere a la face de espera
            del codigo, bloqueante; es aquella que no regresa el control hasta que
            hayan terminado sus tareas.
            no bloqueantes; le regresan el control al hilo principal, aun cuando 
            no ha terminado su tarea.
        * Operaciones Sincronias y Asincronas: cuando tendra lugar la respuesta,
            sincrono; espera el resultado en el tiempo presente y luego sigue.
            asincrono; se ejecuta pero espera el resultado en el tiempo futuro,
            no espera el resultado y suelta el control y lo regresa al hilo
            pricipal.
   */
/*http://latentflip.com/loupe/
  Curso Node.js https://www.youtube.com/playlist?list...*/

/*  Codigo Sincrono Bloqueante. */
(() => {
  console.log("Codigo Sincrono");
  console.log("Inicio")
  function dos() {
    console.log('Dos')
  }
  function uno() {
    console.log('Uno')
    dos();
    console.log('Tres')
  }
  uno();
  console.log("Fin\n");  
})();

/*  Codigo Asincrono No Bloqueante. */
(() => {
  console.log("Codigo Asincrono");
  console.log("Inicio");

  function dos() {
    setTimeout(function () {
      console.log("Dos");
    }, 1000);
  }
  function uno() {
    setTimeout(function () {
      console.log("Uno");
    }, 0);
    dos();
    console.log("Tres");
  }
  uno();
  console.log("Fin");
})();

/*  C.45 Callbacks.
  Una callback (llamada de vuelta) es una función que se ejecutará después de que otra lo haga.
  Es un mecanismo para asegurar que cierto código no se ejecute hasta que otro haya terminado.
  Al ser JavaScript un lenguaje orientado a eventos, las callbacks son una buena técnica para controlar la asíncronía.
*/

function cuadradoCallback(valor, callback) {
  setTimeout(() => {
    callback(valor, valor * valor);
  }, 0 | Math.random() * 1000);
}
// Callback Hell 😈🤘.
cuadradoCallback(0, (valor, result) => {
  console.log('Inicia Callback');
  console.log(`Callback: "${valor}", Resultado ${result}`)
  cuadradoCallback(1, (valor, result) => {
    console.log(`Callback: "${valor}", Resultado ${result}`);
    cuadradoCallback(2, (valor, result) => {
      console.log(`Callback: "${valor}", Resultado ${result}`);
      cuadradoCallback(3, (valor, result) => {
        console.log(`Callback: "${valor}", Resultado ${result}`);
        cuadradoCallback(4, (valor, result) => {
          console.log(`Callback: "${valor}", Resultado ${result}`);          
          cuadradoCallback(5, (valor, result) => {
            console.log(`Callback: "${valor}", Resultado ${result}`);
          });
        });
      });
    });
  });
});

/*  C.47. Promesas
  Una promesa es un objeto que representa el resultado de una operación asíncrona y tiene 3 estados posibles:
    *Pendiente.
    *Resuelta.
    *Rechazada.
  Tienen la particularidad de que se pueden encadenar (then), siendo el resultado de una promesa, los datos de entrada de otra posible función.
  Las promesas mantienen un código más legible y mantenible que las callbacks, además tienen un mecanismo para la detección de errores (catch) que es posible usar en cualquier parte del flujo de datos. */

function cuadradaPromesa(value) {
  if (typeof value !== 'number')
    return Promise.reject(`Error el valor "${value}" ingresado, no es un numero`)
  
  return new Promise((resolv, reject) => {
    setTimeout(() => {
      resolv({
        value,
        result: value * value
      })
    }, 0| Math.random() * 1000);
  })
}

cuadradaPromesa(0)
  .then((obj) => {
    console.log(`Inicio Promise`);
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradaPromesa(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradaPromesa(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradaPromesa(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradaPromesa(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    return cuadradaPromesa('5');
  })
  .then((obj) => {
    console.log(`Promise: ${obj.value}, ${obj.result}`);
    console.log('Fin de la promesa')
  })
  .catch(error => console.error(error));

  /*  C.48 Async / Await
  Las promesas fueron una gran mejora respecto a las callbacks para controlar la asincronía en JavaScript, sin embargo pueden llegar a ser muy verbosas a medida que se requieran más y más métodos .then().
  Las funciones asíncronas (async / await) surgen para simplificar el manejo de las promesas.
  La palabra async declara una función como asíncrona e indica que una promesa será automáticamente devuelta.
  Podemos declarar como async funciones con nombre, anónimas o funciones flecha.
  La palabra await debe ser usado siempre dentro de una función declarada como async y esperará de forma asíncrona y no bloqueante a que una promesa se resuelva o rechace. */

function cuadradoPromise2(value) {
  if (typeof value !== "number") {
    return Promise.reject(
      `Error, el valor " ${value} " ingresado no es un número`
    );
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value * value,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise2(0);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(1);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(2);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(3);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(4);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(5);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
}
funcionAsincronaDeclarada();

// Manera 2 de declarar una funcion asincrona de manera expresada
const funcionAsincronaExpresada = async () => {
  try {
    console.log("Inicio Async Function");

    let obj = await cuadradoPromise2(6);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(7);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(8);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(9);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise2(10);
    console.log(`Async Function: ${obj.value}, ${obj.result}`);

    console.log("Fin Async Function");
  } catch (err) {
    console.error(err);
  }
};
funcionAsincronaExpresada();

/*  C.49 Symbols 
  se usa sin la palabra reservada 'new', crea una referencia unica que no
  deberia de cambiar, acepta un numero o una cadena de texto,
  es como para crear propiedades privadas dentro los objetos. (El 
    simbolo tiene que existir antes para poder asignarlo al obj)    
*/

let id = Symbol('Hola');
let id2 = Symbol('Hola');
console.log(id === id2)
console.log(id, id2)
console.log(typeof id, typeof id2)
// Para agregar la referencia se le pasa el dato como parametro en el symbol
// const NOMBRE = Symbol();

// Agregar un symbolo aun objeto como una propiedad
const NOMBRE = Symbol("nombre");
// Agregar un simbolo  que hace referencia a una funcion
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "Ronaldo",
  edad: 23
}
console.log(persona);
persona.NOMBRE = 'Jose'
console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);
// Agregamos el metodo de manera de simbolo
persona[SALUDAR] = () => {
  console.log('Hola')
}
// Para ejecutarlo se hace lo siguiente
persona[SALUDAR]();
console.log(persona)

for (const propiedad in persona) {
  console.log(`Nombre de la Propiedad: ${propiedad}`);
  console.log(`Valor de la Propieadad: ${persona[propiedad]}`)
}

// Para listar los symbolos del objeto
console.log(Object.getOwnPropertySymbols(persona))

let str = 'Cadena de texto';
let str2 = 'Hola';
// console.log(str2.concat(str))
// let array = [2, 3, 2, 'a', [3, 3]]
// console.log(array.toString())
str.extract(',');
console.log(str)