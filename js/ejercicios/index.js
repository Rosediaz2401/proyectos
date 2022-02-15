// Crear un programa donde solicitemos los datos de facturacion de productos 
// Solicitar razon social
// Los productos con sus precios
// Tiene que sumar el costo de los productos y sumar (crear arreglo de productos) su impuesto
// Impuesto 16% IVA / IGV - 18%
// mostrar la factura en un console.log
// Resultado:
// Factura 123 =
// Razon social : Joel Lozano
// Productos Iphone precio 500 dolares cantidad 2, subtotal = 1000
// Teclado precio 100 dolares cantidad 2 subtotal =200
//libreta precio 2 dolares cantidad 5 subtotal =10
// total antes de impuestos 1210
//total a pagar 1210* 1.16 = 1405/6 dolares
// Nombre, precio, cantidad

 //             Nombre , precio , cantidad
 /*
 var celular = ["Iphone", 500, 2];
 var teclado = ["LogiTech", 100, 1];
 var libreta = ["Scribe", 2, 5]
 
 var carrito = [celular, teclado,libreta];
 
 // Variables Globales
 var razonSocial;
 var importe = 0;
 // solicitar Razon Social 
 function solicitarRS() {
     razonSocial = prompt("Dame tu Razon social: ");
     importe = prompt("Dame el impuesto de tu pais (IVA/IGV")
 }
 
 function calcularImpuesto(impuesto) {
     let total = 0;
     for ( let i = 0; i < carrito.length; i++) {
         total += carrito[i][1] * carrito[i][2];
     }
     return ((total/100) * impuesto) + total ;
 }
 
 function mostrarFactura() {
     let subtotal = 0;
     console.log("Razon Social:", razonSocial)
     for(let i=0; i< carrito.length; i++) {
         console.log(carrito[i][0], "precio", carrito[i][1],"cantidad ", carrito[i][2])
         subtotal += carrito[i][1] * carrito[i][2];
     }
     console.log("total antes de impuesto", subtotal); 
     let total = calcularImpuesto(importe)
     console.log("Total a pagar ", total);
 }
 
 solicitarRS();
 mostrarFactura();


var celular = ["iphone", 500, 2];
var teclado = ["logitech", 100, 1];
var libreta = ["scribe", 2, 5]
var carrito = [celular, teclado,libreta];
var razonSocial;
var producto;
var impuesto = 0.16;
var igv = 0.18;
var precio;
var cantidad;
var subtotal;
var totalNeto=0;
var totalPagar;
function solicitarDatos(){
        return razonSocial = prompt("Ingrese razon social");
}
function totalVenta(){
        do {
                producto = prompt("Ingrese producto");
                if(producto=="iphone"){
                        precio = celular[1];
                        cantidad = celular[2];
                        subtotal = precio * cantidad
                }else if(producto=="logitech"){
                        precio = teclado[1];
                        cantidad = teclado[2];
                        subtotal = precio * cantidad
                }else if(producto=="scribe"){
                        precio = libreta[1];
                        cantidad = libreta[2];
                        subtotal = precio * cantidad
                }
                totalNeto += subtotal;
                pregunta = prompt("Desea agregar otro producto?")
        } while (pregunta=="si");
        return totalPagar = totalNeto + (totalNeto*impuesto);
}
function mostrarFactura(){        
        console.log("Razon social: " + razonSocial +
                    "\tTotal a pagar: " + totalPagar)
}
solicitarDatos();
totalVenta();
mostrarFactura();



// Tarea: 
//Area de un cuadrado L*L
// Cuadrado lado = 4 y base 4 = L*L =4 *4 = 16
// crear un programa que calcule el area de un cuadrado usando funciones
// dos opciones, poner valores definidos o pedirlos a usuario

let a = 4;
let b = 4;

function calcularArea(ladoa, ladob){
return ladoa * ladob
}

//calcularArea(a,b);

let area =calcularArea(a,b);
console.log(area);

let area2 = calcularArea(15,20);
console.log(area2);


// Calculadora - sumar, restar, multiplicar
// al usuario que operacion quiere realizar
// preguntar por los datos que desea sumar, restar o multiplicar
// realizar la operacion correspondiente
// mostrar el resultado en un console.log


let pregunta = " ";


function calculadora(){
        pregunta = prompt("Que operacion quires realizar")
}
function operaciones (a,b){
        if(pregunta === "suma"){
                console.log(" la suma es " + (a+b));
        }else if (pregunta === "resta"){
                console.log(" la resta es " + (a-b));           
        }else if (pregunta === "multiplicar"){
                console.log(" la multiplicacion es " + (a*b));           
        }else if (pregunta === "dividir"){
                console.log(" la division es " + (a/b));           
        }else{
                console.log("Ingresa otro dato")
        }
        
}

calculadora();
operaciones(5,5);



var suma = "+";
var resta = "-";
var multiplicacion = "x";
var operacion;
var num1;
var num2;
function solicitarInfo  (){
    operacion = prompt("Que operacion desea realizar")
    num1 = parseInt(prompt("Ingrese primer digito "))
    num2 = parseInt(prompt("Ingrese segundo digito"))
}
function elegirOperacion(operacion){
    if (operacion == "+") {
        console.log("El resultado de la operacion es: " + realizarSuma())
    }else if (operacion == "-"){
        console.log("El resultado de la operacion es: " + realizarRest())
    }else if (operacion == "x"){
        console.log("El resultado de la operacion es: " + realizarMul())
    }else{
        console.log("Elegir una operacion valida")
    }
}
function realizarSuma(){
    let adicion = num1 + num2
    return(adicion)
}
function realizarRest(){
    let rest = num1 - num2
    return(rest)
}
function realizarMul(){
    let mult = num1 * num2
    return(mult)
}
solicitarInfo();
elegirOperacion(operacion);

var operador;
var suma = "suma";
var resta = "resta";
var multiplicacion = "multiplicacion";
var division = "division";
var num1;
var num2;
var resultado;

function numeros(){
        num1 = parseInt(prompt("Ingrese primer numero"));
        num2 = parseInt(prompt("Ingrese segundo numero"));        
}

function calcular(){
        operador = prompt("Que operacion desea hacer");

        if(operador == "+"){
                return resultado = num1 + num2;
        }else if(operador == "-"){
                return resultado = num1 - num2;
        }else if(operador == "*"){
                return resultado = num1 * num2;
        }else if(operador == "/"){
                return resultado = num1 / num2;
        }       
}

function mostrarResultado(){
        console.log("Resultado: " +
                    "\t" + num1 + " " + operador + " "+ num2 + " = " + resultado);
}

numeros();
calcular();
mostrarResultado();


//Programacion enfocada a objetos

let autoNissan ={
        marca: "Nissan",
        modelo: 2022,
        color: "amarillo",
        plazas: "2",
        motor: "V8",
        gasolina: true,
        multas: [12,15,16],
        dueno:{
                nombre:"Rosa",
                telefono: 1234567890
                }
}

console.log(autoNissan.multas[0]);

let libro1 ={
        nombre: "Harry Potter",
        editorial: "Alfa Wara",
        tomos: true,
        paginas: 500,
        precio: 50,
        stock: 10,
}

let libro2 ={
        nombre: "Principito",
        editorial: "",
        tomos: false,
        paginas: 100,
        precio: 10,
        stock: 100,
}

let estante = [libro1, libro2]

//console.log(estante[1].nombre)


//for(let i=0; i< estante.length; i++ ){
        //console.log(estante[i].nombre)
//}



var contactos = [];


function getData(){
        let persona ={
                nombre:"",
                apellidos:"",
                telefono:0,
                direccion:""
        }
        persona.nombre = document.getElementById("nombre").value;
        persona.apellidos = document.getElementById("apellidos").value;
        persona.telefono = document.getElementById("telefono").value;
        persona.direccion = document.getElementById("direccion").value;    
        return persona;
        
}

function showPersona(){;
        console.log(contactos);
}

function submitbutton(){
     let persona = getData();
      contactos.push(persona); 
      showPersona(persona);
}


var num1;
var num2;

function obtenerNumeros() {
  num1 = parseInt(document.getElementById("numero1").value)
  num2 = parseInt(document.getElementById("numero2").value)
}

function suma() {
  obtenerNumeros();
  mostrarResultado(num1 + num2);
}

function resta() {
  obtenerNumeros();
  mostrarResultado(num1 - num2);
}

function division() {
  obtenerNumeros();
  mostrarResultado(num1 / num2);
}

function multiplicacion() {
  obtenerNumeros();
  mostrarResultado(num1 * num2);
}

function mostrarResultado(resultado) {
  document.getElementById("resultado").innerHTML = resultado;
}

*/







