// //com array
 var alunos = ["Pedro","Tiago","Barquinho"]

var media = [7,8,4]

 console.log("O aluno", alunos[1], "teve média de",media[1])

 // criando um objeto
 var aluno1 = {
     // chave : "valor",
     nome : "pedro",
     media : 7 
 }

 var aluno2 = {
    nome : "tiago",
     media : 8
 }
 // Acessa todo o objeto
 console.log(aluno1)

 //Acessa uma propriedade daquele objeto
 console.log(aluno1.nome)
 console.log(aluno2.media)

var professor = {
    nome: "Gregory",
    salario: 3500,
    materia: "Desenvolvimento De Sistemas",
    dias_aulas: 3

}

console.log(professor)
console.log("O salário do professor é de: ",professor.salario);

//Acessando um valor passando uma chave
console.log("O professor leciona a materia de", professor["materia"])





//criando um objeto vazio
var garrafa = {     
}



//adicionando propriedade em objeto existente
garrafa.cor = "Azul"

garrafa.nome = "garrafa"

garrafa.tamanho = "2L"

garrafa["marca"] = "Staney"


console.log(garrafa);


//alterar propriedade existente
garrafa.cor = "Roxo"
garrafa["marca"] = "Topoué"
console.log(garrafa);



//peça ao usuario, uma nova propriedade e um novo valor
//para ser adicionado na garrafa

var novaPropriedade = prompt("Nova propriedade:")
garrafa[novaPropriedade] = prompt("Digite um valor:")

console.log(garrafa);
console.log(garrafa.quantidade)

//criando metodos

var animal1 = {
    nome : "Tom",
    especie : "Gato",
    raca : "Adidas",
    andar : function(){
        console.log("Estou andando, acredite");
    },
    fala: function(){
        console.log("Miau");
    }
}

console.log(animal1);
console.log(animal1.andar);
animal1.andar()