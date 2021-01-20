/*console.log("Jeniffer Borges");
let testandoint = 7;
let testandostring = "alo";
let testandofloat = 56.53444;
const constante = 666;
console.log (testandoint, testandostring, testandofloat, constante)*/

/*let nome = 'Jeniffer';
let sobrenome = 'Borges';
let testandoxd = 'testando';*/


let pessoa = {
    nome: 'Jeniffer',
    sobrenome: 'Borges',
    idade: 20,
    interesse: 'Games'
}

console.log(pessoa);

let array1 = ['Amém funciona isso', 20, 'AaAaA'];

console.log(array1);

let corSite = 'Amarelo'

function resetarCor(){
corSite = null;
};

function trocarCor(novaCor, tonalidade){
corSite = novaCor + '' + tonalidade; 
};
console.log('A cor do site é:')
console.log(corSite);
resetarCor();
console.log('A cor do site passou a ser:')
console.log(corSite);
console.log('Qual cor nova deseja?')
trocarCor();
console.log('Azul escuro')

function operacaoSomar(soma, soma2){
return soma+soma2;
};

let resultado =operacaoSomar(5,8);

console.log(resultado);

let salario = 100;

console.log (salario + salario);
console.log (salario - salario);
console.log (salario * salario);
console.log (salario / salario);

let idade = 18;
console.log (idade++);//na próxima linha
console.log (idade);//nessa
console.log (++idade)//incrementa nessa linha
console.log (idade);

//atribuição

let valortecladogamer = 100;
valortecladogamer += valortecladogamer;//valortecladogamer + valortecladogamer
console.log (valortecladogamer);

//operador de igualdade
//igualdade estrita
console.log (1 === 1); //está comparando o tipo e o que está sendo comparado
console.log('1' == 1);

//igualdade solta
console.log (1 == 1); //compara apenas o que está sendo comparado, não o tipo
console.log ('1' == 1); 

//operador ternário
// Cliente, se ele tiver mais de 100 pontos = premium, se não, comum.
let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);

//operador logico E (&&)
//retorna TRUE se os dois operandos forem TRUE

let idadeok = true;
let possuicarteira = true;
let pode = idadeok && possuicarteira;
console.log(pode);

//operador logico OU (||)
//retorna TRUE se um dos operandos forem TRUE

let idadeok1 = true;
let possuicarteira1 = false;
let pode1 = idadeok1 && possuicarteira1;
console.log(pode1);

//operador NOT (!)
//oposto, negacao
let pode2 = true;
let candidatoresusado = !pode2
console.log(pode2);

//Comparacao nao boleana
//FALSY:
//undefined, null, 0, false, '', NaN
//TRUTHY:
//true

let corPersonalizada = 'vermelha';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);

//PROJETO 1

let a = 'vermelho';
let b = 'azul';

let c = a;

a= b;
b=c;

console.log(a);
console.log(b);

//CONDICIONAIS
// If...Else
// Switch...Case

/*if (condicao) {
    //codigo a ser executado
}
else if (outracondicao){
    //codigo a ser executado
}
else {
    //codigo a ser executado
}*/

let hora = 0;
if (hora > 6 && hora < 12 ){
    console.log('bom dia');
}
else if (hora > 12 && hora < 18){
    console.log('boa tarde')
}
else{
    console.log('boa noite/boa madrugada')
}






