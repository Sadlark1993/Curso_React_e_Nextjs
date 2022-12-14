function semRetorno(...args: string[]):void {
  console.log(args.join(' '));
}
semRetorno('Claudio', 'Zimmermann', 'Junior');

const pessoa = { //essa variavel ja existe, temos q transformar isso aqui em type module
  nome: 'Luiz',
  sobrenome: 'Otávio',
  exibirNome():void {
    console.log(this.nome+' '+this.sobrenome);
  },
};

pessoa.exibirNome();

export{pessoa}; //pronto, agora é type module.
