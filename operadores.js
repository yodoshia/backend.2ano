//OPERADOR e &&
let maiorIdade = false;
let possuiDocumento = true;

if ( maiorIdade && possuiDocumento) {
    console.log ('Pode entrar na festa!')
} else{
    console.log('Não pode entrar na festa.')
};

//OPERADOR OU ||
let cartaoCredito = false;
let dinheiro = true;

if (cartaoCredito || dinheiro) {
    console.log('Pode fazer a compra.')
}else{
    console.log('Nao pode fazer a compra.');
}

//OPERADOR NOT !
let estaChovendo = true;

if(!estaChovendo){
    console.log('pode sair sem guarda-chuva.')
}else{
    console.log('leve o guarda-chuva.')
};