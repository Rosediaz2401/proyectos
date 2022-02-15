/*let nombre = prompt("Dame tu nombre:");
console.log("hola", nombre
)
console.log("hola", prompt("Dame tu nombre"));
Reglas  o recomendaciones
- pueden ser letras o palaras a-z  A-Z
- no se puede iniciar con un numero
puedo combinar letras y numeros a-z(0-9)
- recomendable empezar con letras minusculas
- puedo declarar variables con simbolos o caracteres
- usar nombres descriptivos ej. edad, precio, nombre
LET variables locales---BUENA PRACTICA USAR LET
VAR variables globales
La estructura de una variable es la palabra reservada let/var seguido del nombre
CONST es una constante, es un valor que no cambia o no deberia cambiar
*/


/*var x=45
x = 10
console.log(x)
document.write(x)

function saludar(){
nombre = "Gabriela"
}
saludar()
console.log(nombre)

const pi= 3.1416;
console.log(pi)


var color = rojo
var flor = rosa
var computadora = hp

let fruta = kiwi
let pokemon = picachu
let nombre = teresa

const angulo = 90
const moneda = peso
const idioma = espanol
*/

/* 1. String - Texto, caracter o cualquier numero represen todo como texto, un string puede tener ""''

let nombre = "joel"
let apellido = "lopez"
let caracter = "12,150"

2. Number --> numeros

let monto = 52
let resultado = monto = 5 //57
let pi = 3.1416
pi = 3.1416

3. Booleanos/ bool - Solo pueden tomar dos valores verdadero/falso true/false

let puede conducir = true
let puede votar = false
Los booleanos se pueden igual representar como numeros binarios 0 false y 1 true

Otros tipos de datos: Array, Objetos, clases
*/

/*function login () {

let user = document.getElementById("user").value;
console.log(typeof(user))
let password = document.getElementById("password").value;

if(user ==""){
    user = null
}

if(user == null) {
    console.log("Error, campo vacio")
}else {
    alert("Welcome");
}

}*/
/*let nombre =1;
let edad = 15;
let licencia = true;

if (edad >=18) alert("Puedes tramitar tu licencia de conducir");
console.log(typeof(nombre))

if(nombre) {
    console.log("wow funciona")
} else { 
    console.log("no funciona")
}

if(edad >= 18 && licencia){
    alert("Puedes tramitar tu licencia")
} else {
    alert("NO puedes Tramitar tu licencia")
}*/

/*let nombre ="Blanca"
let sintoma1 = 37
let dolorCabeza = true
let dolorCuerpo = false

if (sintima1 >= 37 && dolorCabeza && dolorCuerpo){
    alert("Ups, tienes 80% de probabilidad de tramitar vacaciones")
} else {
alert("tienes 60% de probabilidad")
}
*/

/*let nombre ="Eduardo"
let temperatura = 25
let dolorCabeza = false
let dolorCuerpo = false
let vacuna = true

console.log("prueba");
if (temperatura >= 41 && dolorCabeza && dolorCuerpo && !vacuna){
    alert("Ups, tienes 80% de probabilidad de tramitar vacaciones")
} else if (temperatura >= 40 && dolorCabeza && dolorCuerpo && vacuna) {
alert("tienes 60% de probabilidad, realiza prueba")
} else if ( temperatura<= 36 && dolorCabeza == false && dolorCuerpo == false){
    alert("tienes un 30%, estate tranquilo")
} else {
    alert("ingrea tu informacion nuevamente")
}*/

/*let calificacion = 4

if (calificacion <3){
    console.log("Muy deficiente")
} else if ( calificacion 3>5){
    console.log("Insuficiente")
}


let rendimiento = [1,5,3]

let result = rendimiento.sort(function (a,b) {returna-b})
console.log (result)


let Joel = ["Joel", 30, true, false]
let Richard = ["Richard", 45, false, false]
let Blanca = ["Blanco", 45.1, true, true]

let personas = [Joel, Richard, Blanca]

// si la persona tiene mas de 45 grados de temp. y presenta ambos 
 //sintomas tiene covid.
 // si la personas tiene menos de 40 G y presenta un sintomas 
 //tiene 60% probabilidad.

 console.log(personas[0][1]);
 console.log(personas[1][1]);
 console.log(personas[2][1]);

 if (personas[1] [1]>45 && personas[1][2] && personas[1][3] ){
     console.log("tienes covid")
 } else if (personas [1][1] <40 && (personas[1][2]|| personas [1][3])){
     console.log("tienes 60% de probabilidad")
 }else {
     console.log("No tiene covid")
 }
*/

// Una maestra tiene 12 Alumnos, ella desea Tener una
 //lista ordenada alfabeticamente para pasar lista 

 // Ademas necesita otra lista para entregarle al director 
 // de los alumnos con mejor promedio , ordenados por su mayor calificacion 
 //
 // y con base a esa ultima lista, el director tendra que hacer dos grupos
 // Lod avanzados ( promedio de 8.5) y para regularizacion. (promedio menor a 8.5)
 // debo mostrar en pantalla  los dos distintos grupos.
/*
let ordenada2 =[] 
tom.splice(0,1)
bob.splice(0,1)
jazmin.splice(0,1)

ordenada2.push (tom, bob, jazmin)
ordenada2.sort()
console.log(ordenada2);

 let alumnos = []

 let joel = [1," Joel Lozano", 10]
 let richard = [3," Ricardo Martinez", 9]
 let rosa = [4," Rosa Díaz", 8]
 let roger = [10," Roger Zenteno", 10]
 let blanca = [2," Blanca Benitez", 8.5]
 let diego = [5," Diego Flores", 7.7]
 let eduardo = [6," Eduardo Vázquez", 7.1]
 let manuel = [7," Manuel Espinoza", 8.5]
 let aulo = [9," Aulo Guerrero", 8.6]
 let jazmin = [8," Jazmin López", 6.3]
 let tom = [12," tom cruze", 5.0]
 let bob = [11," bob el constructor", 8.2]

 alumnos.push(joel,richard,rosa,roger,blanca,diego,eduardo,manuel,aulo,jazmin,tom,bob);
/*
let ordenada =[]
joel.shift() // borra el primer elemento
richard.shift()
rosa.shift()
roger.shift()
blanca.shift()
diego.shift()
eduardo.shift()
manuel.shift()
aulo.shift()
jazmin.shift()
tom.shift()
bob.shift()

ordenada.push(joel,richard,rosa,roger,blanca,diego,eduardo, manuel, aulo,jazmin, tom, bob)
ordenada.sort()
console.log(ordenada);



console.log(alumnos.sort(function(a,b){
    return b[2] - a[2]
}));



let genios =[]
let regularizacion =[]

if(alumnos[0][2] >= 8.5){
    genios.push(alumnos[0])
}else {
    regularizacion.push(alumnos[0])
}


let indice = 0

while(indice <alumnos.length){
    if(alumnos[indice][2] > 5){
        console.log("Alumno" + alumnos[indice][1] + " aprobo el curso")
    } else {
        console.log("Alumno" + alumnos[indice][1]+ " reprobo el curso")
    }
    indice ++
}


let indice = 0

while(indice <alumnos.length){
    if(alumnos[indice][2] < 5){
        console.log("Alumno" + alumnos[indice][1] + " aprobo el curso")
    } else {
        console.log("Alumno" + alumnos[indice][1]+ " reprobo el curso")
    }
    indice ++
}
// let alumnos2 = [joel, richard, rosa, roger, blanca, diego, eduardo, manuel, aulo, jazmin, tom, bob];

// console.log(alumnos2.sort(function (a, b) { //respuesta 1
//   if (a[1] > b[1]) {
//     return 1;
//   }
//   if (a[1] < b[1]) {
//     return -1;
//   }
//   return 0;
// }));

//Usando el ciclo while, hacer que el alumno 
//tom cruze apruebe el curso y que sus companeros repruebes (valor menor a 6)
//tom cruze debe aprobar el curso 

let joel = [1, "Joel Lozano", 10]
let richard = [3, "Ricardo Martinez", 9]
let rosa = [4, "Rosa Díaz", 8]
let roger = [10, "Roger Zenteno", 10]
let blanca = [2, "Blanca Benitez", 8.5]
let diego = [5, "Diego Flores", 7.7]
let eduardo = [6, "Eduardo Vázquez", 7.1]
let manuel = [7, "Manuel Espinoza", 8.5]
let aulo = [9, "Aulo Guerrero", 8.6]
let jazmin = [8, "Jazmin López", 6.3]
let tom = [12, "tom cruze", 5.0]
let bob = [11, "bob el constructor", 8.2]

let alumnos = [joel, richard, rosa, roger, blanca, diego, eduardo, manuel, aulo, jazmin, tom, bob];

let index =0;
while (index <alumnos.length){
    if(alumnos[index][1] !="tom cruze"){
        alumnos[index][2] =5;
    }else{
        alumnos[index][2] =10;     
    }
        index ++
}

console.log("Antes de entrar");
let indice = 0;
while(indice < alumnos.length) {
  if(alumnos[indice][2] < 6) {
    console.log("Alumno " + alumnos[indice][1] + " reprobo el curso");
  } else {
    console.log("Alumno " + alumnos[indice][1] + " aprobo el curso");
  }
  indice ++;
}


let i= 5
while(i <= 100){
    console.log(i)
    i +=5
}


let numero = 5;

do{

 console.log("numero" + numero)
}
while(numero <5)



let joel = [1, "Joel Lozano", 10]
let richard = [3, "Ricardo Martinez", 9]
let rosa = [4, "Rosa Díaz", 8]
let roger = [10, "Roger Zenteno", 10]
let blanca = [2, "Blanca Benitez", 8.5]
let diego = [5, "Diego Flores", 7.7]
let eduardo = [6, "Eduardo Vázquez", 7.1]
let manuel = [7, "Manuel Espinoza", 8.5]
let aulo = [9, "Aulo Guerrero", 8.6]
let jazmin = [8, "Jazmin López", 6.3]
let tom = [12, "tom cruze", 5.0]
let bob = [11, "bob el constructor", 8.2]

let alumnos = [joel, richard, rosa, roger, blanca, diego, eduardo, manuel, aulo, jazmin, tom, bob];


let nombre;
do{
    nombre = prompt("quien fue el hacker");
    console.log(nombre)
   }
   while(nombre !=="tom cruze")
   console.log(nombre + " es el culpable")


console.log(Math.random() * (10-1) +1);
do{
    ganador = prompt("averigua el numero");
    console.log(math.floor(Math.random()* (10-1)));
}
while (ganador == 9)

alert("ganador");


let ganador;

while (ganador){
    let numero = prompt("dame el numero");
    let aleatorio = Math.floor(Math.random() * (10-1) +1);
    console.log(numero, "--", aleatorio);
    if (numero == aleatorio){
        ganador = false;
        alert("GANASTE")
    }
}

console.log("comienza");
let ganador = (Math.floor(Math.random()*(10-1) +1));
let numeroAleatorio
console.log(numeroAleatorio);
do{
  numeroAleatorio = prompt ("Escribe un numero");
  }while(ganador !== numeroAleatorio);
  alert("Ganaste");
  console.log(ganador)
  console.log(numeroAleatorio)

 


//Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
const multiploBase = 5
let multiploVariable = 1
let numero = prompt("introduce un numero");



while(multiploVariable <= numero){
    let multiplo = multiploVariable%multiploBase;
    if (multiplo == 0){
        console.log(multiploVariable)
        }
       multiploVariable++;
}


let numero = prompt ("ingresa un numero")
let numero2 = prompt ("ingresa otro numero")
let incremento = 1

if (numero >= 1 &&  numero <= 50 && numero2 >=1 && numero2 <= 50){
    while(incremento <=50){
        if(numero == incremento || numero2 == incremento){
        console.log(incremento +"loteria")
        }else{
            console.log(incremento)
        }
        incremento++
    }
    }
 

    let arr = [];
    let n;
    do{
        n =prompt("introduce numero");
        arr.push(n);
    }while (n !=0);
    arr.pop();
     console.log(arr+" ");
     //console.log("arreglo:", ar.toString());



console.log("empieza")
let palabraDelUsuario;
let palabrasConcatenadas = "";

do{
palabraDelUsuario = prompt("Ingrese letras o palabras");
palabrasConcatenadas += palabraDelUsuario;
}while(palabraDelUsuario != "")

alert(palabrasConcatenadas)


let dia;

do {
    dia = prompt("dia de la semana");
    if(dia == "domingo"){
        alert("Vete a descansar");
    }else{
        alert("Buen dia, excelente" + dia);
    } 
}while(dia !== "domingo")

let day; 

while(day !== "domingo"){
    day = prompt("Dame un dia");
    if(day == "domingo"){
        alert("Vete a descansar")
    }else{
    alert("buen dia, excelente" + day)
}
}

let array = ["joel", "ricardo", "alberto"];

console.log(array[0]) // joel

console.log(array)// joel ricardo alberto

for (let i= 10; i >= 2; i--){
    console.log ("Hola", i)
}

let compras =[ "leche", "huevo", "salchicha", "sal"];

let indice = 0;
while(indice < compras.length){
    console.log(compras[indice]);
    indice ++
}

for(let indice =0; indice < compras.length; indice++){
    console.log(compras[indice])
    
}


// tabla de multiplicar numero 7
//quiero en pantalla el numero 1 al 10 por 7 y su resultado
//1*7 = 7
// 2 *7 = 7

let multiplica = 1

for( let tabla  = 0; multiplica.lenght; tabla +7){
    console.log(multiplica(tabla))
}

let numero =7

for(let i=1; i<=10; i++){
let resultado = i*numero
console.log(i + " * "+" = " + resultado)
}

let  numero = 7;


for (let index = 1; index <= 10;  index++) {
    let resultado = numero * index
    console.log(index + "*" + numero + "=" + resultado);
}

let joel = [1, "Joel Lozano", 10]
let richard = [3, "Ricardo Martinez", 9]
let rosa = [4, "Rosa Díaz", 8]
let roger = [10, "Roger Zenteno", 10]
let blanca = [2, "Blanca Benitez", 8.5]
let diego = [5, "Diego Flores", 7.7]
let eduardo = [6, "Eduardo Vázquez", 7.1]
let manuel = [7, "Manuel Espinoza", 8.5]
let aulo = [9, "Aulo Guerrero", 8.6]
let jazmin = [8, "Jazmin López", 6.3]
let tom = [12, "tom cruze", 5.0]
let bob = [11, "bob el constructor", 8.2]

let alumnos = [joel, richard, rosa, roger, blanca, diego, eduardo, manuel, aulo, jazmin, tom, bob];

//realizar un ciclo for que me diga cuando un alumno sacó una calificación menor 6
// que imprima en pantalla "Alumno reprobado: [nombre del alumno]"
//for [indice] [0] [1] [2]


let joel = [1, "Joel Lozano", 10]
let richard = [3, "Ricardo Martinez", 9]
let rosa = [4, "Rosa Díaz", 8]
let roger = [10, "Roger Zenteno", 10]
let blanca = [2, "Blanca Benitez", 8.5]
let diego = [5, "Diego Flores", 7.7]
let eduardo = [6, "Eduardo Vázquez", 7.1]
let manuel = [7, "Manuel Espinoza", 8.5]
let aulo = [9, "Aulo Guerrero", 8.6]
let jazmin = [8, "Jazmin López", 6.3]
let tom = [12, "tom cruze", 5.0]
let bob = [11, "bob el constructor", 8.2]

let alumnos = [joel, richard, rosa, roger, blanca, diego, eduardo, manuel, aulo, jazmin, tom, bob];

for(let i=0; i< alumnos.length; i++){
    for(let j= 0; j < alumnos[i].length; j++){
        if(j == 2 && alumnos[i][2] < 6){
            console.log("alumno reprobado " + alumnos[i][j-1]);
        }
    }
    }

for(let i = 0; i< alumnos.length; i ++){
    let alumno = alumnos[i];
    if(alumno[2] < 6){
        console.log("alumno reprobado " + alumno[1])
    }
}


for(let i=1; i<=5; i++){
    for(let j= 1; j<=5; j++){
        console.log()
    }
    }



const multiplicacion = 9
const tope = 15

let resultado;

for(let i =1; i<=tope; i++){
    resultado =multiplicacion * i;
    console.log(multiplicacion + " x  " + i + " = "+ resultado) 
}


const tablas = 5
let resultado;

for(i =1; i<=tablas; i++){
for(j = 1; j<= 10; j++){
    resultado = i * j;
    console.log(resultado)
}
}


let garageManuel = ["Ranger", "lobo", "f-158", "Cheyene", "bronco"];
let garageJoel = ["vocho", "tsuru","Lada", "Safari", "Jymmy"];

let museo = [garageManuel, garageJoel];
let dueno;

for(let index=0; index < museo.length; index++){
    for(let j= 0; j<museo[index].length; j++){
        if(index=0){
            dueno = "Manuel"
        }else{
            dueno ="Joel"
        }
    console.log("El ",museo[index][j],"es auto de", dueno )
}
}


function suma(num1,num2){ // parametros son los valores que necesita mi funcion para trabajar
    let total = num1 + num2;
    return "La suma es  = "+total; // return = devolver o regresar un valor
}
// llamado a function, los parametros son separados por comas.
let sumaTotal = suma(2,2);
console.log(sumaTotal);


function suma(num1, num2){
    let total = num1 +num2;
    console.log("La suma es " + total)
}

// si se hace de esta forma la funcion se queda hasta aqui, ya no se puede jugar con los parametros



//Ejemplo con variables
let nombre;
let temperatura;
let dolorCabeza;
let diagnostico;

function solicitarInformacion () {
    nombre = prompt("Dame tu nombre");
    temperatura = prompt ("Dame tu temperatura");
    dolorCabeza = prompt("Tienes dolor de cabeza");
}

function diagnostico (){
    if (temperatura >=36){
        diagnostico = "Probablemente tienes covid"
    } else{
        diagnostico ="No tienes covid"
    }
}

function mostrarResultado (){
    console.log(diagnostico)
}

solicitarInformacion();
diagnostico();
mostrarResultado();




function solicitarInformacion () {
   let nombre = prompt("Dame tu nombre");
   let temperatura = prompt ("Dame tu temperatura");
   let dolorCabeza = prompt("Tienes dolor de cabeza");
   
   let mensaje =diagnostico(temperatura);
   console.log(mensaje)
}

function diagnostico (temperatura){
    if (temperatura >=36){
        return "Probablemente tienes covid"
    } else{
        return "No tienes covid"
    }
}

function mostrarResultado (diagnostico){
    console.log(diagnostico)
}

solicitarInformacion();
*/