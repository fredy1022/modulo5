let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
const titulo = {

    titulo: 'el Hobbit',
    autor: 'J.P.R Tolkien',
}
    

console.log(titulo)
libros[0].paginas = 350
console.log(libros)

const titulo1 = {
    titulo: 'cien años de soledad',
    autor: 'Gabriel Garcia Márquez',
}
console.log(titulo1)


const titulo2 = {
    titulo: 'Harry Potter y la piedra filosofal', 
    autor: 'J.k. Rowlling',
    
}
console.log(titulo2)




// const estudiantes = [
//     { nombre: "Pedro", edad: 29, promedio: 7.9 },
//     { nombre: "Ana", edad: 33, promedio: 8.9 },
//     { nombre: "Pablo", edad: 32, promedio: 9.5 },
//     { nombre: "Juan", edad: 25, promedio: 6.0 },
//     { nombre: "Maria", edad: 28, promedio: 7.3 },
//     { nombre: "Andres", edad: 45, promedio: 8.7 },
// ];

// const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
// console.log("suma de edades:", sumaEdades);

// const promedioEdades = sumaEdades / estudiantes.length;
// console.log("el promedio de las edades es:", promedioEdades);




// let productos = [
//     { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
//     { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
//     { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
//     { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }


// ]

// const camisa = {
//     nombre: 'camisa',
//     precio: '20'
// }
//  const zapatos = {
//     nombre: 'zapatos',
//     precio: '50'

//  }
// const producto = [camisa, zapatos]
// console.log(producto)

// const productoFiltrado = productos.find((producto) => producto.precio > 30)
// console.log(productoFiltrado)


// - Utilizando `filter` debes cfiltrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
//     - Filtra los productos con precio mayor de 30 en un nuevo array llamado `preciosMayores`.
