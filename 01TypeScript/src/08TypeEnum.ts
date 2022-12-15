//enum
export enum Cores{
  VERMELHO,
  AZUL,
  AMARELO,
  VERDE
}

//console.log(Cores);
console.log(Cores.VERMELHO); //0
console.log(Cores[0]); //VERMELHO

export enum Cores2{
  VERMELHO = 10,
  AZUL = 20,
  AMARELO,
  VERDE
}

console.log(Cores2[0]); //undefined
console.log(Cores2.VERMELHO); // 10


export enum Cores{ //Ele da o merge nos dois enums

  ROSA = 30,
  ROXO
}

console.log('****************\n');
console.log(Cores);
