let personas = [
    {
        nombre: "Juan",
        apellidoPaterno:"Lopez",
        edad: 36,
        ciudad: "Ciudad de Mexico"
    },
    {
        nombre: "Maria",
        apellidoPaterno: "Garza",
        edad: 25,
        ciudad:"Lima - Miraflores"
    },
    {
        nombre: "Hugo",
        apellidoPaterno: "Jauregui",
        edad: 25,
        ciudad: "Guadalajara"
    },
    {
        nombre: "Adán",
        apellidoPaterno: "Orlando",
        edad: 25,
        ciudad: "Cusco"
    }
]


function llenarTabla(){
    let tabla ="";
    for(let i=0; i<personas.length; i++){
            tabla += "<tr><td>" + personas[i].nombre + "</td><td>" + personas[i].apellidoPaterno + "</td><td>" +  personas[i].edad + "</td><td>" + personas[i].ciudad + "</td><td>";
    }
    document.getElementById("body_personas").innerHTML = tabla;
}

llenarTabla();