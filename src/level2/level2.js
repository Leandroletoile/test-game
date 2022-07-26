// No cambies los nombres de las funciones.

export function obtenerMayor(x, y) {
  
  return x > y ? x : y 
}

export function mayoriaDeEdad(edad) {

   return  edad >= 18 ? 'Allowed' : 'Not allowed';
}
  
export function conection(status) {

  if(status === 1){
    return 'Online'
  }else if (status == 2){
    return 'Away'
  }else{
    return 'Offline'
  }
}

export function saludo(idioma) {  

  if(idioma == 'aleman'){
    return 'Guten Tag!'
  }else if(idioma == 'ingles'){
    return 'Hello!'
  }else if(idioma == 'mandarin'){
    return 'Ni Hao!'
  }else{
    return 'Hola!'
  }
}

export function colors(color) {  

 if (color == "blue"){
  return 'This is blue'
 }else if (color == "red"){
  return 'This is red'
 }else if (color == "green"){
  return 'This is green'
 }else if(color == "orange"){
  return 'This is orange'
 }else{
  return 'Color not found'
 }
}

export function esDiezOCinco(numero) {

  return (numero == 10 || numero == 5) ? true : false

}

export function estaEnRango(numero) {  

  return numero > 20 && numero < 50 ? true : false
}

export function esEntero(numero) {

  return Number.isInteger(numero) ? true : false
}

export function fizzBuzz(numero) {

  if (numero %3 == 0 && numero%5 != 0){
    return 'fizz'
  }else if (numero %5 == 0 && numero %3 != 0){
    return 'buzz'
  }else if   (numero %5 == 0 && numero %3 == 0){
    return 'fizzbuzz'
  }else{
    return numero
  }
  
}

export function operadoresLogicos(num1, num2, num3) {
  
  if(num1 > 0 && num2 > 0 && num3 > 0 && num1 > num2 && num1 > num3){
    return 'Número 1 es mayor y positivo'
  }else if (num1 < 0 || num2 < 0 || num3 < 0){
    return 'Hay negativos'
  }else if (num1 > 0  && num2 > 0  && num3 > 0  && num3 > num1 && num3 > num2){
    return num3 + 1
  }else if (num1 == 0 || num2 == 0 || num3 == 0){
    return 'Error'
  }else{
    return false
  }
   
}

export function esPrimo(numero) {

  if (numero == 0 || numero == 1 || numero == 4) return false;
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false;
	}
	return true;
  
}

export function esVerdadero(valor){

    return valor === false ? "Soy falso" : "Soy verdadero"
  
}

export function tablaDelSeis(){

    let arrayTablaDelSeis = [];
    for (let i = 0; i < 11; i++){
      arrayTablaDelSeis.push(6 * i);
    }
    return arrayTablaDelSeis; 
}

export function tieneTresDigitos(numero){

  return numero > 99 && numero <= 999 ? true : false  
}

export function doWhile(numero) {  

 let i = 0;

  do {
     i++ ;
     numero = numero + 5;    
  } while (i < 8);
  
  return numero
}

