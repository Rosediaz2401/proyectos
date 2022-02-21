

let cuentas = [
   { nombre:"Mali", saldo:200, password: "helloworld"},
   { nombre:"Gera", saldo:290, password: "133t"},
   { nombre:"Maui", saldo:67, password: "123"},
]

let saldoTotal = 0;
let total = 0;
let usuario = document.getElementById("user-name");
let password = document.getElementById("password");
let button = document.getElementById("submit");
let buttonPass = document.getElementById("submit-pass");
let userText = document.getElementById("user")
let saldo = document.getElementById("saldo")
let bienvenido = document.getElementById("bienvenido")
let saldoNum = document.getElementById("saldo-numero")
let abonar = document.getElementById("abonar")
let retirar = document.getElementById("retirar")


button.addEventListener("click",function(){
   let miUsuario = usuario.value
   let nombreUsuario =cuentas.filter(usuario => usuario.nombre === miUsuario);
   if(nombreUsuario.length>0){
      password.style.display='inline-block';
      buttonPass.style.display='inline-block'
      button.style.display='none'
     }else{
      Swal.fire('El usuario no existe') 
   }

   buttonPass.addEventListener("click",function(){
      let pass = password.value
      if(nombreUsuario[0].password === pass){
         usuario.style.display='none';
         password.style.display='none';
         buttonPass.style.display='none';
         bienvenido.style.display="inline-block"
         userText.innerText =nombreUsuario[0].nombre
         saldo.innerText=nombreUsuario[0].saldo
         saldoNum.style.display='inline-block';
         abonar.style.display='inline-block';
         retirar.style.display='inline-block';

         
         abonar.addEventListener("click",abonarSaldo)
         retirar.addEventListener("click",retirarSaldo)

         
         //total = parseInt(nombreUsuario[0].saldo)
         let saldoActual = Object.values(nombreUsuario[0])[1]
      

         function abonarSaldo(){
            let cantidad = document.getElementById("saldo-numero").value 
            cantidad = parseInt(cantidad)     
            saldoActual += cantidad;
            console.log(saldoActual)

            if(saldoActual > 990){
               Swal.fire('Excede Monto')            
            }
            else
            saldo.innerText =saldoActual
          }

          function retirarSaldo(){
           
            let cantidad = document.getElementById("saldo-numero").value 
            saldoActual -= cantidad;
            console.log(saldoActual)

            if(saldoActual <10){
               Swal.fire('Saldo Insuficiente')
            }
            else
            saldo.innerText =saldoActual
          }
         
      } else{
         Swal.fire('Contraseña Incorrecta')
   }
      
   })
})   

