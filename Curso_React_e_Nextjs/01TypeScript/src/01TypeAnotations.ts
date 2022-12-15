/* eslint-disable */
//Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer simbolo');
//let big: bigint = 10n;

//Arrays
let numbersArray: Array<number> = [1,2,3,4];
let stringsArray: Array<string> = ['a', 'b'];
let numbersArray2: number[] = [2,3,4]; //tem desse jeito tbm.

//objetos

//adulto eh opcional, os outros atributos devem ser inicializados.
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  nome: 'claudio',
  idade: 30,
}

//funções

function sum(x: number, y: number){
  return x+y; //está inferindo que a funcao tem retorno number
}
const result = sum(2, 3); //ele inferiu o tipo da variável como number.

export const soma2: (x: number, y:number)=>number = (x, y) =>  x + y; //mesma coisa q soma().
