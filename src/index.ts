import { cuandoPasa, enviarAlFrontend, iniciar } from './lib/ui.ts';

/* Precios de los artistas en patacones 
ID_ARTISTA  | PRECIO
=============================
sabrina     |   1000
kgatlw      |    700
lali        |    500
magdalena   |    600
viagra      |    400
dillom      |    350
marilina    |    200
mugre       |    150

Descuentos:
CÓDIGO      | DESCUENTO
==============================
TIC10       |       10%
TIC20       |       20%
DARIO       |       50%
*/

// COMPLETAR: Implementar la función calcularTotal que reciba el id del artista, la cantidad de entradas y un código de descuento (opcional) y devuelva el precio total a pagar en patacones.


function calcularTotal(artista:string, cantidad:number, codigo:string): number{
  let precio
  if (artista === "sabrina"){
    precio = 1000
  }
  else if (artista === "dillom"){
    precio = 350
  }
  else if (artista === "marilina"){
    precio = 200
  }
  else if (artista === "kgatlw"){
    precio = 700
  }
  else if (artista === "magdalena"){
    precio = 600
  }
  else if (artista === "viagra"){
    precio = 400
  }
  else if (artista === "lali"){
    precio = 500
  }
  else{
    precio = 150
  }

  precio = precio*cantidad

  if (codigo === "DARIO"){
    precio = precio/2
  }
  else if (codigo === "tic20"){
    precio = precio*(1/5)
  }
  else if (codigo === "tic10"){
    precio = precio*(1/10)
  }
  else {
    precio = precio
  }

  

  return precio;
}

cuandoPasa('seleccionarArtista', ({ id, cantidad, codigoDescuento }) => {
  let cantidadNum: number = Number(cantidad);
  let precio: number = calcularTotal(id, cantidadNum, codigoDescuento);
  enviarAlFrontend('mostrarPrecio', precio);
});

iniciar();
