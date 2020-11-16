// CLASE 1 PLATZI DEFAULT PARAMS Y CONCATENACION
function newFunction(name, age, country) {
  var name = name || "Ronaldo";
  var age = age || 23;
  var country = country || "GT";
  console.log(name, age, country);
}

// es6
function newFunction2(name = "Ronaldo", age = 23, country = "GT") {
  console.log(name, age, country);
}

// invocando las funciones
newFunction2(); //toma los valores por defecto que se declararon
newFunction2("Miguel", 23, "MX");

let hello = 'hello';
let world = "world";
let epicPhrase = hello +' '+ world;
console.log(epicPhrase);

// usando template lieral es6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// Clase 2. Uso de LET y CONST, Multiliea, Spread Operation y Destructuracion
let lorem = "Quiero conseguir cosasa nuevas en el mundo de la web \n"
+ "Otra frase epica que se necesita";

// es6
let lorem2 = `Otra frase epica que necesitamos
  podemos concatenar mas datos en mas de una linea ahora en es6`;

console.log(lorem2)

// Desustruraccion de elementos
let person = {
  'name': 'Ronaldo',
  'age': 23,
  'country': 'GT'
}
console.log(person.name, person.age);
// es6
let { name, age, country } = person;
console.log(name, age, country);

// operadore de propagacion
let team1 = ['Enrique', 'Jose', 'Roberto'];
let team2 = ['Cristina', 'Elizabeth', 'Martha'];

let education = ['Ronaldo', ...team1, ...team2];
console.log(education)

// Uso de let y var 
{
  var globalVar = "Global Var";
}
{
  let globalLet = 'Global Let'
  console.log(globalLet)
}

console.log(globalVar);
// console.log(globalLet) // no es global en el scope

const myConstant = 'Constante';
// myConstant = 'a';
console.log(myConstant)

// Datos complejos


//Funciones declaradas vs funciones expresadas
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

