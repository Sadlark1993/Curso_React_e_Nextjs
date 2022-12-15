export const objetoA = {
  chaveA: 'chave A',
  chaveB: 'chave B'
}

objetoA.chaveA = 'é chave';
//objetoA.chaveC = 'nao da certo'; //isso nao da certo. O tipo do objetoA ja foi inferido pelo ts

//deixar livre para inserir outros objetos
const objetoB: Record<string, unknown> = {
  chaveA: 'chave A',
  chaveB: 'chave B'
}

objetoB.chaveC = 'chave C';
objetoB.chaveD = 'valor D';

//outro jeito
const objetoC: {
  chaveA: string;
  readonly chaveB: string; //só leitura
  chaveC?: string;
  [key: string]: unknown;
}={
  chaveA: 'chave A',
  chaveB: 'chave B'
};

objetoC.chaveD = 'valor D';
