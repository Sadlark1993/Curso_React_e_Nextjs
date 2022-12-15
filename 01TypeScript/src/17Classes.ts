
//long way to define a class
export class Business{
  public readonly name: string; //'public' is redundant here, its the default
  private readonly members: Member[] = []; //accessible only inside the class
  protected readonly cnpj: string; //accessible inside this class and children

  constructor(name: string, cnpj: string){
    this.name = name;
    this.cnpj = cnpj;
  }

  //setter
  public setMember(member:Member):void{
    this.members.push(member);
  }

  //getter
  public getMembers():Member[]{
    return this.members;
  }
}

//short way
class Member {
  constructor(
    readonly name: string, //this creates the var, receive the value, and assign it to the var at once.
    readonly lastName: string,
  ){}
}

const business1 = new Business('Udemi', '111.1111111.1111/0001');
console.log(business1);
console.log(business1.name);

business1.setMember(new Member('Jin', 'Smith'));
business1.setMember(new Member('John', 'Travolta'));
business1.setMember(new Member('Carlos', 'The Croackouch'));
business1.setMember({name: 'Marcos', lastName: 'Aurelio'}); //strucural typing. Remember?

console.log(business1.getMembers());

