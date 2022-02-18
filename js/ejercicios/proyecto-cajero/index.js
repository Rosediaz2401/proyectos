

let cuentas = [
   { nombre:"m", saldo:200, password: "1"},
   { nombre:"Gera", saldo:290, password: "133t"},
   { nombre:"Maui", saldo:67, password: "123"},
]



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
        alert("Usuario no existe")
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

         let total = parseInt(nombreUsuario[0].saldo)
         let sumaNumeros =[total]
         let restaNumero = []
         

         function abonarSaldo(){
            let cantidad = document.getElementById("saldo-numero").value
            
            cantidad = parseInt(cantidad)        
            sumaNumeros.push(cantidad)
         
            let saldoTotal = sumaNumeros.reduce(function(valorAnterior,valorActual){
               return valorAnterior + valorActual
            })
            
            if(saldoTotal >=990){
               alert("Excede monto maximo de $990")
            } else{
               alert(`Tu nuevo saldo es de ${saldoTotal}`)
               saldo.innerText=saldoTotal
            }
          }

          function retirarSaldo(){
            let cantidad = document.getElementById("saldo-numero").value
            
            cantidad = parseInt(cantidad) 


            restaNumero.push(cantidad)
            let saldoTotal = restaNumero.reduce(function(valorAnterior,valorActual){
               return valorAnterior - valorActual
            })

            console.log(restaNumero)
           
            if(saldoTotal <=10){
               alert("Fodos insuficientes monto minimo $10")
            } else{
               alert(`Tu nuevo saldo es de ${saldoTotal}`)
               saldo.innerText=saldoTotal
            }
          }
         
      } else{
         alert("Contraseña incorrecta")
   }
      
   })
})   

