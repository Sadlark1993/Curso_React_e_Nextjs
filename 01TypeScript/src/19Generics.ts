/* eslint-disable */

//this lesson I took from Youtube: https://www.youtube.com/watch?v=IOzkOXSz9gE&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=18&ab_channel=TheNetNinja

/* **************Generics in Functions***************** */

//this is a function that takes a object and returns another object similar but with an uid key.
export const addUID = (obj: object) => {
  const uid:number = Math.floor(Math.random()*100);
  return {...obj, uid};
}

const docOne = addUID({name: 'Yoshi', age: 40});

// error TS2339: Property 'name' does not exist on type '{ uid: number; }'.
//console.log(docOne.name); // <------------------
//it happens cuz the ts does't know the object structure.

//with this , you capture the structure of the object
const addUID2 = <T>(obj: T) => {
  const uid:number = Math.floor(Math.random()*100);
  return {...obj, uid};
}

const doc2 = addUID2({name: 'Yoshi', age: 40});
console.log(doc2.name); //ok
//but if you do this: const variablee = addUID2('something'); it will accept, and cause problems.

//so, to avoid it to accept everything, we can do this:
const addUID3 = <T extends object>(obj: T) => {
  const uid:number = Math.floor(Math.random()*100);
  return {...obj, uid};
}
//so, it only accepts objects

//you can be more specific
const addUID4 = <T extends {name:string}>(obj: T) => {
  const uid:number = Math.floor(Math.random()*100);
  return {...obj, uid};
}//it only accepts objects that has the key 'name'.


/* *********Generics in Objects*********** */
interface Resource<T>{
  uid: number;
  resourceName: string;
  data: T;
}

const doc4:Resource<string> = {
  uid: 1,
  resourceName: 'name',
  data: 'this needs to be string'
}

const doc5:Resource<object> = {
  uid: 1,
  resourceName: 'name',
  data: {keyy: 'this needs to be object'}
}
