// //mostra uma mensagem no console
// console.log("Salve rapaziadinha top")

// // Caixinha de alerta
// //alert("Testando pra ver se vai")

// var nome = "Cristiano"
// var numero = 7
// var pulo = 2.10
// var theBest = true

// console.log("O nome:" + nome);
// console.log("De número:",numero);
// console.log(pulo);
// console.log(theBest);

// console.log(typeof(pulo))

// var nulo = null
// var indefinido = undefined

// console.log(typeof(nulo))
// console.log(typeof(indefinido))

// //OPERADORES ARITIMETICOS
// //+  -  *  /  %
// var a = 10, b = 5

// console.log("Soma",a + b);
// console.log("Subtração",a - b);
// console.log("Multi",a * b);
// console.log("Div",a / b);
// console.log("Módulo",a % b);

// // OPERADORES LÓGICOS
// //E, OU, NÃO
// //&&, ||, !

// var verdade = true
// var mentira = false

// console.log(verdade && mentira); 
// console.log(verdade || mentira);
// console.log(verdade && !mentira);

// //OPERADORES RELACIONAIS
// // > < >= <= == =! === !==

// var x = 65, y = 32, z = "65"

// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x != y);

// //Compara tipo e valor da variavel
// console.log(x === z);

// var time = prompt("Digite seu clube de coração")

// console.log("Seu time é o",time);

// DESVIOS CONDICIONAIS
var estaVIVO = true


if(estaVIVO == true){
    console.log("Você está vivo");
}
else if(estaVIVO = false){
    console.log("Estás muerto");
}
else{
    console.log("Você não ta nada");
}

//SWITCH = ESCOLHA
var camisa = "Laranja"
switch(camisa){
    case "Azul":
        console.log("Ganhou um voucher");
    break
    case "Branco":
            console.log("Ganhou playstation");
    break
    case "Vermelho":
        console.log("Ganhou uma ferrari");
    break
    default:
        console.log("Camisa inválida");
    break   
}

//LAÇOS DE REPETIÇÃO = LOOPS
//FOR = PARA

for(var i = 0; i < 5; i++){
    console.log("Estoy aquí");
}
console.log("Acabou o for");

//WHILE = ENQUANTO

var c = 1
while(c < 10){
    console.log("Entrei no loop");
    c++
}

//FUNCÇÕES
function teste(){
    console.log("Funcionou sim o teste");
}      

teste()

function teste2(parametro){
    console.log("O parametro é:", parametro);
}

teste2("arroz")

//COM RETORNO
function calculo(n1,n2){
    let resultado = n1 + n2
    return resultado
}

var final = calculo(3,5)
console.log("A conta deu " + final);

//Exercicio










