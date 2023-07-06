/* eslint-disable */

type Age = number; //create a new type
type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
}

const person: Person ={
  name: 'Joseph',
  age: 30,
  salary: 100_000
}

type ColorRGB = 'red' | 'blue' | 'green';
type ColorCMYK = 'cian' | 'magenta' | 'yellow' | 'black';
type Color = ColorRGB | ColorCMYK;

export function setFavoriteColor(person:Person, favoriteColor: Color){
  return {...person, favoriteColor}; //returns another object, does't modify the actual.
}


console.log(person);
console.log(setFavoriteColor(person, 'black'));

