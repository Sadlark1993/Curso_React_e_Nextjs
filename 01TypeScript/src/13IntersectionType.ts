/* eslint-disable */

type HasName = {name: string};
type HasLastName = {lastName: string};
type HasAge = {age: number};

//union type
type Person = HasName | HasLastName | HasAge; //too flexible
export const person:Person = {//it can have anyone of the, or even all. Too flexible.
  name: 'Jim',
  age: 30
}

//intersection type
//a object of this type, must have all the three values. It's more strict
type Person2 = HasName & HasLastName & HasAge;
const person2: Person2 = {
  name: 'Joseph',
  lastName: 'Marques',
  age: 10
}


type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersection = AB & AC; //same as type A = 'A'.



//module mode
export default 1;
