const saludo = 'Hola mundo';

console.log(saludo)
// CLASE 1 PLATZI

function newFunction (name, age, country){
  var name = name || 'Ronaldo';
  var age = age || 23;
  var country = country || 'GT';
  console.log(name, age, country);
}

// es6
function newFunction2 (name = 'Ronaldo', age = 23, country = 'GT' ) {
  console.log(name, age, country);
}

// invocando las funciones
newFunction2();  //toma los valores por defecto que se declararon
newFunction2('Miguel', 23, 'MX');
