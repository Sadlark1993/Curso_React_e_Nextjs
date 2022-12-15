/* eslint-disable */

let a: 10 = 10; //this is of type 10 (number's subtype), so, a const value 10

let b = 10 as const; //const b of value 10 (same thing);

//this is useful to set const to object attributes
const person = {
  name: 'Andre' as const,
  lastName: 'Silva'
}

//it can work as enum also
function choseColor(cor: 'RED' | 'YELLOW' | 'BLUE'): string{ //I've put string, to the function not return a const.
  return cor;
}
console.log(choseColor('BLUE'));

export default 1;
