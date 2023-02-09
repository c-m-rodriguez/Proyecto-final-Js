const pintarCarrito = () => {
    carritoContainer.innerHTML = "";
    carritoContainer.style.display = "flex";
   const carroHeader = document.createElement ("div")
   carroHeader.className = "carro-header";
   carroHeader.innerHTML = `
   <h1 class="carro-header-title">Carro de compras</h1>
   `;
   carritoContainer.append(carroHeader);

   const carroButton = document.createElement ("h1");
   carroButton.innerText = "x";
   carroButton.className = "carro-header-button" ;
   carroHeader.append(carroButton)

   carroButton.addEventListener ("click", () => {
    carritoContainer.style.display = "none";
    
    
   })


  carrito.forEach((product)=> {
    let carritoContent = document.createElement ("div");
    carritoContent.className ="carro-contenido"
    carritoContent.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio}$</p>
    <p>Cantidad: ${product.cantidad}</p)
     `;
    carritoContainer.append(carritoContent);

        
    let eliminar = document.createElement ("span");
    eliminar.innerText = "❌";
    eliminar.className = "eliminar-producto";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProductos )
        
  })



  const total = carrito.reduce ((acc,el) => acc + el.precio * el.cantidad, 0 );
  
  const totalCompra = document.createElement ("div");
  totalCompra.className = "total-compra"
  totalCompra.innerHTML = `total a pagar: ${total} $`;

  carritoContainer.append(totalCompra)
}

verCarrito.addEventListener ("click", pintarCarrito)

const eliminarProductos = () => {
const foundId = carrito.find((element) => element.id);
 carrito = carrito.filter((carritoId) => {
  return carritoId !== foundId;
 })

 productosLocal();
 pintarCarrito();
}





