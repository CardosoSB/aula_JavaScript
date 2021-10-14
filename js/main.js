function clicou(){ //função que da a interação do click
    document.getElementById("agradecimento"). innerHTML = "<b>Meu GitHub (clique)</b>"; //função que da a interação do click
    console.log(document.getElementById("agradecimento"));
    //alert("obrigado por clicar!");
}

function redirecionar(){ // essa função serve para ao clicar no texto indicado ela abre uma aba direcionada ao link
    window.open("https://github.com/CardosoSB") // abre o link em uma nova aba
    window.location.href = "https://github.com/CardosoSB" // abre o link na mesma aba
}

function trocar(){ //passando o mouse no elemento ele mostra outro texto
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
}

function voltar(){ //ao remover o mouse de cima do texto ele volta a ser como antes (coloque o mesmo texto inicial ou ele só irá mudar para outro texto)
    document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    
}

//outra maneira de fazer o mesmo função que a de cima mas para varios paragrafos diferentes usando o "elemento" aqui e o "this" lá no html
function trocar(elemento){ //passando o mouse no elemento ele mostra outro texto
    elemento.innerHTML = "obrigado por passar o mouse";
}

function voltar(elemento){ //ao remover o mouse de cima do texto ele volta a ser como antes (coloque o mesmo texto inicial ou ele só irá mudar para outro texto)
    elemento.innerHTML = "passe o mouse aqui";
    
}

function load(){ //alerta aparece assim que a pagina carregar
    alert("pagina carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}
//===Funções e tipo de variaveis===
/*var validar = 0; -- variavel global
function validaidade(idade){
    var validar -- variavel local
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual a sua idade?");
validaidade(idade);
console.log(validar);
*/
/*function soma(n1, n2){
    return n1 +n2;
}*/
/*function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("vai Japão", "Japão", "Brasil"));
alert(soma(5, 10));*/



//===data===

/*var d = new Date;
alert(d);
alert(d.getDate());
alert(d.getDay());
alert(d.getMonth());
alert(d.getFullYear());
alert(d.getHours());
alert(d.getMinutes());
*/

//===laços de repetição===

/*var count = 0;
while (count <= 10){
    console.log(count);
    //count = count + 1;
    count++; //(esse ++ significa que é pra pegar o valor da variavel count e adicionar mais 1)
    alert(count);
};
*/

/*var count;
for(count=0; count <=5; count++){
    alert(count);
};*/

//===condicionais===

/*var idade = prompt("qual sua idade?")
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
prompt é uma caixinha de perguntas
*/



//===dicionario===

//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);

//===array===

//var fruta = {nome:"maçã", cor:"vermelha"}
//console.log(fruta.nome)
//alert(fruta.cor)

//===variaveis e alertas===

//var nome = "Amanda Cardoso";
//var idade = 29;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos.");
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(frase.replace("Japão", "Brasil"));

//alert(idade + idade2);

//===printando no console e no alerta===

//var lista = ["maçã", "pêra", "uva", "salada mista"];
//console.log(lista);
//console.log(lista.toString()); (transforma a array em apenas string)
//console.log(lista.join(" - ")); (esta comando coloca uma separação entre as linhas da array)
//lista.push("laranja"); (adiciona à lista)
//lista.pop(); (remove da lista (sem nenhuma informação dentro do parenteses ele remove o ultimo elemento))
//console.log(lista); (comando para printar no console)
//alert(lista); (comando para printar no alerta)
//console.log(frase.toLowerCase()); (deixa todas as palavras em minusculo)
//console.log(frase.toUpperCase()); (deixa tudo em maiusculo)
