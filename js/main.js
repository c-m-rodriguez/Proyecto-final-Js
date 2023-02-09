const contenido = document.getElementById("contenido")
const verCarrito = document.getElementById ("verCarrito")
const carritoContainer = document.getElementById("carritoContainer")




let carrito = JSON.parse (localStorage.getItem("productos")) || [];

productos.forEach((product)=> {
    let content = document.createElement ("div");
    content.className = "comics";
    content.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p class="precio">${product.precio} $</p>
    
    `;

    contenido.append(content);

    let comprar = document.createElement ("button");
    comprar.className = "boton";
    comprar.innerText = "comprar";

    content.append(comprar);

        comprar.addEventListener ("click", ()=> {
        const repeat = carrito.some((repeatproduct) => repeatproduct.id === product.id);

        if (repeat) {
            carrito.map((prod) => {
                prod.cantidad++;
            })
        } else {
            carrito.push({
                id: product.id,
                img:product.img,
                nombre:product.nombre,
                precio:product.precio,
                cantidad:product.cantidad,
            })

        }
        Swal.fire("Agregado al carrito","Aceptar","success" );
        console.log(carrito);
      productosLocal();
        
    })

})
const productosLocal = () =>{ 
localStorage.setItem ("productos",JSON.stringify(carrito));
}

