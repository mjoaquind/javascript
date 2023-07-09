/*
Se desean analizar el avance de las ventas del HOT SALE 2022, para ello se toman al
azar distintas tiendas y se analizan sus productos vendidos. De cada tienda se lee
nombre y rubro (perfumería, electrodomésticos, indumentaria). Por cada una se
ingresan artículos (descripción) con cantidades vendidas y total de venta. Se pide:
a- Porcentaje de jeans vendidos sobre el total de artículos en las tiendas de
indumentarias.
b- Total de perfumes vendidos hasta el momento en el Hot Sale.
c- Total recaudado por tienda y en la promoción.
d- Cuál fue el artículo más vendido.
e- Cuál fue la tienda que recaudó más.

*/

const calcularPorcentajeJeans = (acumuladorJeans, acumuladorArticulosIndumentaria) => {
    if (acumuladorJeans > 0) {
        const resultado = acumuladorJeans*100/acumuladorArticulosIndumentaria;
        console.log('Porcentaje de jeans vendidos sobre el total de artículos en las tiendas de indumentarias: ' + resultado);
    } else {
        console.log('No se han vendido Jeans, no se puede calcular el procentaje.');
    }
}

let acumuladorArticulosIndumentaria = 0;
let acumuladorArticulos = 0;
let acumuladorJeans = 0;
let totalPerfumes = 0;
let totalRecaudado = 0;
let masVendidoCantidad = 0;
let masVendidoArticulo = '';
let tiendaMasVendioMonto = 0;
let tiendaMasVendio = '';

let tiendaNombre = prompt('Ingrese el nombre de la tienda:');
while(tiendaNombre != '') {
    let totalRecaudadoPorTienda = 0;
    let tiendaRubro = prompt('Ingrese el rubro de la tienda:');
    let articuloDescripcion = prompt('Ingrese descripcion del articulo:');
    while(articuloDescripcion != '') {
        let articuloCantidadVendida = parseInt(prompt ('Ingrese cantidad de ventas:'));
        let articuloTotalVenta = parseInt(prompt('Ingrese monto total de la venta:'));
        if(tiendaRubro == 'indumentaria') {
            if(articuloDescripcion == 'jeans'){
                acumuladorJeans = acumuladorJeans + articuloCantidadVendida;
            }
            acumuladorArticulosIndumentaria = acumuladorArticulosIndumentaria + articuloCantidadVendida;
        }
        if(articuloDescripcion == 'perfume') {
            totalPerfumes = totalPerfumes + articuloCantidadVendida;
        }
        if (articuloCantidadVendida > masVendidoCantidad) {
            masVendidoCantidad = articuloCantidadVendida;
            masVendidoArticulo = articuloDescripcion;
        }
        totalRecaudadoPorTienda = totalRecaudadoPorTienda + articuloTotalVenta;
        console.log('Venta tienda ' + tiendaNombre + ', articulo ' + articuloDescripcion + ', cantidad ' + articuloCantidadVendida + ', total ' + articuloTotalVenta);
        articuloDescripcion = prompt('Ingrese descripcion del articulo (deje vacío para finalizar):');
    }
    console.log('Total recaudado por tienda ' + tiendaNombre + ': ' + totalRecaudadoPorTienda);
    totalRecaudado = totalRecaudado + totalRecaudadoPorTienda;
    if(totalRecaudadoPorTienda > tiendaMasVendioMonto) {
        tiendaMasVendioMonto = totalRecaudadoPorTienda;
        tiendaMasVendio = tiendaNombre;
    }
    tiendaNombre = prompt('Ingrese el nombre de la tienda (deje vacío para finalizar):');
}

calcularPorcentajeJeans(acumuladorJeans, acumuladorArticulosIndumentaria);
console.log('Total de perfumes vendidos hasta el momento en el Hot Sale: ' + totalPerfumes);
console.log('Total recaudado en la promoción: ' + totalRecaudado);
console.log('El artículo más vendido fue: ' + masVendidoArticulo + ' con un total de ' + masVendidoCantidad + ' ventas');
console.log('La tienda que más recaudó fue: ' + tiendaMasVendio + ' con un ingreso total de ' + tiendaMasVendioMonto);