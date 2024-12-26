

const Inventario = function(nombre,cantidad,precio,categoria){
    this.nombre = nombre
    this.cantidad = cantidad
    this.precio = precio
    this.categoria = categoria
}

let producto1 = new Inventario("Manzana",7,500,"Fruta");
let producto2 = new Inventario("Pera",4,520,"Fruta");
let producto3 = new Inventario("Televisor", 2,50000,"Electronico");
let producto4 = new Inventario("Tostadora",4,2560,"Electronico");
let producto5 = new Inventario("Campera Nike",5,15000,"Ropa");
let producto6 = new Inventario("Remera Adidas",3,3100,"Ropa");

let lista = [producto1,producto2,producto3,producto4,producto5,producto6]

function filtrarproducto() {
    let palabraCrave = prompt("Ingresa la categoria del producto que buscas").toUpperCase();
    let resultado = lista.filter((x) => x.categoria.toUpperCase().includes(palabraCrave));
    
    if (resultado.length > 0) {
        ///se muestra por consola
        console.table(resultado)
        ///se busca el contenedor, en caso de que ya se haya utilizado la funcion
        let contenedor = document.getElementById("listaproductos");

        ///se crea variable para el registrar en el html
        if (!contenedor) {
            contenedor = document.createElement("div");
            /// se le otorga el id para identificar
            contenedor.id = "listaproductos";
            /// se le agrega la lista
            document.body.appendChild(contenedor);
        }
        /// se limpia para evitar que se repita dos veces
        contenedor.innerHTML = "";

        /// se recorre el array y se guarda
        for (let x of resultado) {
            let listaElementos = document.createElement("ul");
    
            listaElementos.innerHTML = `
                <li>Nombre: ${x.nombre}</li>
                <li>Cantidad: ${x.cantidad}</li>
                <li>Precio: ${x.precio}</li>
                <li>Categoría: ${x.categoria}</li>
            `;
    
            contenedor.appendChild(listaElementos);
        }
    } else {
        alert("No se encontró el producto");
    }
}

function agregarproducto() {
    let nombre = prompt("Ingresa el nombre del producto");
    let cantidad = prompt("Ingresa la cantidad del producto (solo numeros)");
    let precio = prompt("Ingresa el precio del producto (solo numeros)");
    let categoria = prompt("Ingresa la categoria del producto");

    /// se busca evitar espacios vacios o letras donde se exige numero
    if (isNaN(cantidad) || isNaN(precio) || nombre.trim() === "" || categoria.trim() === "") {
        alert("Por favor ingrese valores válidos");
        return;
    }
    /// se pasa el producto como objeto del inventario a la lista
    let producto = new Inventario(nombre, parseInt(cantidad), parseFloat(precio), categoria);
    lista.push(producto);
    alert("Producto agregado al inventario!")
    /// se llama , se limpia si hubo lista anterior y manda el nuevo objeto
    actualizarlista();

}

function actualizarlista() {
    console.table(lista)
    ///se busca el contenedor por el id, en caso de que ya se haya utilizado la funcion
    let contenedor = document.getElementById("listaproductos");

    ///se crea variable para el registrar en el html
    if (!contenedor) {
        contenedor = document.createElement("div");
           /// se le otorga el id para identificar
        contenedor.id = "listaproductos";
           /// se le agrega el nodo
        document.body.appendChild(contenedor);
    }
    /// se limpia para evitar que se repita dos veces
    contenedor.innerHTML = "";

    /// se recorre el array y se guarda
    for (let x of lista) {
        let listaElementos = document.createElement("ul");

        listaElementos.innerHTML = `
            <li>Nombre: ${x.nombre}</li>
            <li>Cantidad: ${x.cantidad}</li>
            <li>Precio: ${x.precio}</li>
            <li>Categoría: ${x.categoria}</li>
        `;
        /// se le agrega el nodo
        contenedor.appendChild(listaElementos);
    }
}