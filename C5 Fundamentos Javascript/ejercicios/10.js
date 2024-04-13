function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

    // Convertimos la fecha a un objeto Date.
    const fechaDate = new Date(fecha);
  
    // Si la fecha no es válida, el objeto Date tendrá un valor NaN.
    if (isNaN(fechaDate)) {
      return false;
    }
  
    // Obtenemos el día, mes y año de la fecha.
    const dia = fechaDate.getDate();
    const mes = fechaDate.getMonth() + 1;
    const año = fechaDate.getFullYear();
  
    // Validamos el rango de días para el mes y año.
    const diasDelMes = new Date(año, mes, 0).getDate();
    if (dia < 1 || dia > diasDelMes) {
      return false;
    }
  
    // Si todas las validaciones son correctas, retornamos true.
    return true;
  
}


module.exports = esFechaValida;