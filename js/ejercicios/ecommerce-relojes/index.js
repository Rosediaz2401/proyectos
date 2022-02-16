var inventario = [
    {
        name: "Invicta",
        imagen: "https://static1.abc.es/media/summum/2021/11/19/0-kmjD--620x349@abc.jpg",
        precio: 3000,
        cantidad: 10,
        descripcion: "Es un reloj versatil, para toda ocasion. Reloj con maquinaria Japonesa"
    },

    {
        name: "Rolex",
        imagen: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2020/10/09/16022609883766.jpg",
        precio: 99000,
        cantidad: 5,
        descripcion: "Es un reloj versatil, para toda ocasion. Reloj con maquinaria Japonesa"
    },

    {
        name: "CASIO",
        imagen: "https://cdn.forbes.com.mx/2020/10/IW394005_2040920-1-e1603478770689.jpg",
        precio: 500,
        cantidad: 8,
        descripcion: "Es un reloj versatil, para toda ocasion. Reloj con maquinaria Japonesa"
    },

    {
        name: "FOSSIL",
        imagen: "https://media.revistagq.com/photos/5ef9cdcde3676ab95600f1d7/16:9/w_1280,c_limit/FOTO-principal-AUDEMARS-PIGUET.jpeg",
        precio: 2500,
        cantidad: 6,
        descripcion: "Es un reloj versatil, para toda ocasion. Reloj con maquinaria Japonesa"
    }
]

function showItems(){
    let row = document.getElementById("card-item");
    for(let i=0; i<inventario.length;i++){
        let element = inventario [i];
        let card = `
        <div class="col-sm-6 col-md-3 col-lg-3">
        <div class="card">
                <img src="${element.imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.descripcion}</p>
                  <a href= "detalle.html">Detalle</a>
                  <button onclick =${saveData(element,i)}> Detalle</button>
                  <button class="btn btn-primary" id="modalDetail type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal${i}"
                  "
                  onclick= ${showDetail(element,i)}>Comprar</button>
                </div>
                </div>
                </div>`;

    row.insertAdjacentHTML("afterbegin",card);

    }
}
showItems();

saveData();
function saveData(){
    localStorage.setItem("nombre","Invicta");
}

function showDetail(element,i){
    let divModal = document.getElementById("modalDetail")
    let modal =`
    <div class="modal fade" id="modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="itemTitle">${element.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="${element.imagen}" class="img-fluid" alt="...">
      <p class="text-center fw-bold">${element.precio}</p>
      <p class="text-center fw-light"> Disponibles ${element.cantidad}</p>
      <br/>
      <p class="fw-normal">${element.descripcion}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `
    divModal.insertAdjacentHTML("afterbegin",modal);
}










