
// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

export function devolverString(str) {

  return str.toString();
}

export function suma(x, y) {

  return x + y
}

export function resta(x, y) {
 
  return x- y ;
}

export function multiplica(x, y) {

  return x * y;
}

export function divide(x, y) { 

  return x / y;
}

export function sonIguales(x , y) {  

  return x == y ? true :false
}

export function tienenMismaLongitud(str1 , str2) {  

  return str1.length === str2.length ? true : false
}

export function menosQueNoventa(x) {  

  return x < 90 ? true : false
}

export function mayorQueCincuenta(x) {  

  return x > 50 ? true : false
}

export function obtenerResto(x,y) {  

  return x % y;
}

export function esPar(x) {

  return (x % 2) == 0 ? true : false
}

export function esImpar(x) {  

  return (x % 2) == 0 ? false : true
}

export function elevarAlCuadrado(x) {  

  return x * x
}

export function elevarAlCubo(x) { 

  return x ** 3
}

export function elevar(x , exp) {  

  return Math.pow(x, exp)
}

export function redondearNumero(x) {  

  return Math.round(x);
}

export function redondearHaciaArriba(x) { 

  return Math.ceil(x);
}

export function numeroRandom(x) {  

  return Math.random(x);
}

export function esPositivo(x) {

  if(x == 0){
    return false
  }else if (x > 0) {
  return "Es positivo"
  }else{
    return "Es negativo"
  }
}

export function agregarSimboloExclamacion(str) {  

  return str + "!"
}

export function combinarNombres(str1, str2) {

  return  str1 +" "+ str2
}

export function obtenerSaludo(x) {

  return "Hola "+ x + "!"
}

export function obtenerAreaRectangulo(x, y) {  

  return x * y
}


export function retornarPerimetro(x){

  return x * 4
}


export function areaDelTriangulo(x, y){

  return (x * y) / 2
}


export function deEuroAdolar(x){

  return x+((x*20)/100) 
}


export function esVocal(x){
 
  if (x.length > 1){
    return "Dato incorrecto"
  }else if ( x != "a" && x != "e" && x != "i" && x != "o" && x != "u" ){
    return "Dato incorrecto"
  }else{
    return "Es vocal"
  }
}
