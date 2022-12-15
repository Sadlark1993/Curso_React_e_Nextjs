/* eslint-disable */
//You can model a class or a object using type or interface. You choose.

//with types
type nameType = {
  name:string;
};

type lastNameType = {
  lastName:string;
}

type fullNameType = {
  fullName():string;
}

//you can use type alias also
type completeNameType = nameType & lastNameType & fullNameType;

export class Person implements nameType, lastNameType, fullNameType{
  constructor(public name:string, public lastName:string){}

  public fullName():string {
    return this.name + ' ' + this.lastName;
  }
}

//with interfaces
interface nameInt{
  name:string;
}

interface lastNameInt{
  lastName:string;
}

interface fullNameInt{
  fullName():string;
}

//you can use this also
interface completeNameInt extends nameInt, lastNameInt, fullNameInt{}

export class Person2 implements nameInt, lastNameInt, fullNameInt{
  constructor(public name:string, public lastName:string){}
  public fullName():string {
    return this.name + ' ' + this.lastName;
  }
}

//testing polymorphsm
const test: lastNameInt = new Person2('aooo', 'silveee');
console.log(test.lastName); //as I thought
