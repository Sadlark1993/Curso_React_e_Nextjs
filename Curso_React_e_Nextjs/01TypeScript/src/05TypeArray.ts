// Array<type> or type[]

export function multiplicaArgs(...args: Array<number>):number {
  return args.reduce((ac, valor)=>{
    return ac*valor;
  }, 1);
}
console.log(multiplicaArgs(1, 2, 3));

export function concatenaString(...args: string[]){
  return args.reduce((ac, valor)=> ac+valor, '');
}
console.log(concatenaString('a', 'bc', 'd'));

//recebe strings, retorna um array com todas as strings em maiusculo
export function upper(...args: string[]): string[] {
  return args.map((item)=>item.toUpperCase());
}
console.log(upper('a', 'abacate', 'ta maiúsculo'));

//readOnly
const array1: readonly string[] = ['camarao', 'batata'];
const array2: ReadonlyArray<string> = ['camarao', 'batata'];

console.log(array1, array2);
