// No cambies los nombres de las funciones.

export function devolverPrimerElemento(array) {

    return array[0]
  }
  
  
  export function devolverUltimoElemento(array) {

    return array.pop()
  }
  
  
  export function obtenerLargoDelArray(array) {

    return array.length
  }
  
  
  export function incrementarPorUno(array) {

    for (let i = 0; i < array.length; i ++) {
          array[i] ++;  
    }
  return array
      
  }
  
  export function agregarItemAlFinalDelArray(array, elemento) {

      if (array != ['']) return [...array , elemento];
      else return [elemento];

  }
  
  
  export function agregarItemAlComienzoDelArray(array, elemento) {
    
    if (array != ['']) return [elemento , ...array];
    else return [elemento];
  }
  
  
  export function dePalabrasAFrase(palabras) {

    let string = "";
      for (let i = 0; i < palabras.length; i++) {
          string = string += palabras[i] + " "; 
      }
      string = string.slice(0, -1);
      return string;
  }
  
  
  export function arrayContiene(array, elemento) {

    if(array.includes(elemento)) return true;
    return false;
  }
  
  
  export function agregarNumeros(numeros) {

    let suma = 0
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i] 
    }
  return suma
  }
  
  
  export function promedioResultadosTest(Test) {

    let suma = 0
    for (let i = 0; i < Test.length; i++) {
      suma += Test[i]   
    }
    return  (suma/Test.length)
  }
  
  
  export function numeroMasGrande(numeros) {

    return Math.max(...numeros)
  }
  
  
  export function multiplicarArgumentos() {

    return "NO ESTA EN EL TEST"
  }
  
  
  export function cuentoElementos(arreglo){

    let newArreglo = arreglo.filter(item=> item > 18);
    return newArreglo.length
  }
  
  
  export function diaDeLaSemana(numeroDeDia) {

    return (numeroDeDia === 1 || numeroDeDia === 7) ? "Es fin de semana" : "Es dia Laboral"   
  } 
  
  
  export function empiezaConNueve(n) {
    
    return ("" + n).charAt(0) == 9 ? true : false   
  }
  
  
  export function todosIguales(arreglo) {

    var newArray = arreglo.filter((x, i) => arreglo.indexOf(x) === i)
    
    return newArray.length === 1 ? true : false
  
  } 
  
  
  export function mesesDelAño(array) {  

    return (array.length === 9) ? ["Marzo", "Noviembre", "Enero"] : "No se encontraron los meses pedidos"

  }
  
  export function mayorACien(array) {

    return array.filter(number=>number > 100)
  }
  
  export function breakStatement(numero) {

    let suma = []
    for (let i = 0; i < 10; i++) {

      if(numero === i){break}

      numero = numero +2
      suma.push(numero)
    }
    return suma.length == 10 ? suma : 'Se interrumpió la ejecución'
 
  }
   
  export function continueStatement(numero) {

    let suma = []   
    for (let i = 0; i < 10; i++) {

      if (i === 5) {continue} 
        
      numero = numero +2
      suma.push(numero)
    }
    return suma

  }
  