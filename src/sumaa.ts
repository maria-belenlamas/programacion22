let numero1: number=Number(prompt("ingrese primer numero"));
let numero2: number=Number (prompt("ingrese el segundo numero"));

if(numero1 <= numero2){
  for(let indice: number = numero1;  indice < numero2; indice++){
 Suma += indice;
 Console.log(suma);
}
} else {
  for(let indice2: number = numero2;  indice2 < numero1; indice2--){
 Suma += indice2;
 Console.log(suma);
}
