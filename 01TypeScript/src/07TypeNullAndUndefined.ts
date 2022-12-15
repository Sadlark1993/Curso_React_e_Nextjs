/* eslint-disable */
//in some cases, we have to verify to avoid problems
let x;
if(typeof x === 'undefined' ) x = 20;
console.log(x*2);

//this is something that can generate on of that cases:
function anyFunction(id:number, name?:string):{
  id: number;
  name?: string;
}{
  return {
    id,
    name,
  }
}
console.log(anyFunction(1));

//null
export function squareOf(x: any){
  if(typeof x === 'number') return x*x;
  return null;
}

const var1 = '2';

if(squareOf(var1) === null) console.log('Conta invalida');
else console.log(squareOf(var1));

//he explained als the type never
