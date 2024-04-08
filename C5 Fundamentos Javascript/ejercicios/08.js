function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
    // Verificamos si el tipo de dato de "numero" es un número.
    if (typeof numero !== "number") {
      return false;
    }
  
    // Verificamos si el resto de la división de "numero" por 1 es igual a 0.
    if (numero % 1 === 0) {
      return true;
    } else {
      return false;
    }

  
}

module.exports = esNumeroEntero;