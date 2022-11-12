
//Ejemplo del gatito 

//-Propiedades = variables o constantes
const color = "Gris";
var tamaño = "Chiquito";
var edad = 5;
const  raza = "Siames";
var caracter = "Agresivo";

//Metodos o funciones 
function comer (){}
function treparArboles (){}
function maullar (){}
function grunir (){}
function dormir (){}
function corretearPerros (){}


//Precursor de los objetos, Array 

//var gatoObjeto = ['Cilantro', 'Agresivo', 5, 'Angora', true, 'Chiquito'];

//console.log(typeof(gatoObjeto));

//Evolucion de los arreglos 
var Cilantro = {
    nombre : 'Cilantro',
    edad : 5,
    raza : "Siames",
    caracter : "Agresivo",
}

var botas = {
    nombre : 'Botas',
    edad : 5,
    raza : "Siames",
    caracter : "Agresivo",
}

var Perejil= {
    nombre: "Perejil",
    edad: 10,
    caracter : "Feliz",
    raza : "Siames",
}

var Cebollita= {
    nombre: "Cebollita",
    edad: 1,
    caracter : "Timida",
    raza : "Esfinge",
}

var Limon= {
    nombre: "Limon",
    edad: 2,
    caracter : "Agrio",
    raza : "Egipcio",
}

console.log(typeof(Cilantro));
console.log("El nombre de Cilantro es", Cilantro.nombre);
console.log("El caracter de Cilantro es",Cilantro.caracter);


///////////////////////////////////////////////////////////


/*
   Clases para agilizar este proceso (plantillas)
Para esto se usa la palabra reservada 'class'
*/

// 1.- Defino mi clase con la palabra reservada class

class gato {
    // 2.- Definir mis propiedades o atributos como variables, para despues ponerle valores 
    nombre = "";
    edad = 0;
    raza = "";
    caracter = "";
   

// 3.- Agregar consructores. 
//Necesito construir con los atributos que ya define la calse

constructor(nombre, edad, raza, caracter){ //funcion especial para construir donde necesito esos parametros
   this.nombre = nombre;
   this.edad = edad;
   this.raza= raza;
   this.caracter = caracter;
   }


// 4.- Definir los metodos que seran definidos como funciones o acciones 
   maullar(){
    console.log("Miau");
   }
   dormir(){
    console.log("Zzzzzzz");
    }
   ronronear(){
    console.log("Prrrrrrrr");
    }
}

// 5.- Para empezar a crear o instanciar objetos (gatos), vamos a utilizar la palabra reservada new nombreClass

var Garfield = new gato ("Garfield", 9, "Naranja", "Dormilon");
var Felix = new gato("Felix", 8, "Caricaturas", "Amistoso");
var Kitty= new gato("Kitty", 2, "Kawaii", "Tranquilo");
var Botas= new gato("Botas", 1, "Corriente", "Jugueton");
var Wero= new gato("Wero", 6, "De la calle", "Rasguñon");

console.log(Garfield);
console.log(Kitty);
console.log(Felix);
console.log(Botas);
console.log(Wero);

Garfield.dormir();
Botas.ronronear();
Wero.maullar();








 







