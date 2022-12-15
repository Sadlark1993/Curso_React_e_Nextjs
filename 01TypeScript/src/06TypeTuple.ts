//tuplas

export const dadosCliente1: [number, string] = [1, 'Luiz'];
dadosCliente1[0] = 100;
//dadosCliente[2] = 'qualquer coisa'; // nao fucniona. O tipo e tamanho eh fixo.
//ainda da pra inserir com .push() e retirar com .pop(). É uma má prática. por isso, colocamos readonly
console.log(dadosCliente1);

const dadosCliente2: readonly [number, string, string?] = [2, 'Carlos']; //O terceiro item eh opcional.
//dadosCliente2[2] = 'Carlão'; //nao da, ele é readonly
console.log(dadosCliente2);
//os dois primeiros sao obrigatorios, o resto e opcional mas tem que ser string.
const dadosCliente3: [number, string, ...string[]] = [3, 'José', 'Adalberto'];
dadosCliente3[8]= 'oieee';

console.log(dadosCliente3);

