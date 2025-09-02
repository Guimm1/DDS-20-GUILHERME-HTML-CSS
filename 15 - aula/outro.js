var produto1 ={
    nome : "Coca cola",
    categoria : "Bebidas",
    quantidade : 30,
    tamanhos : ["200ml" , "Lata", "600ml", "2L"],
    descricao:function(){
        //uso do this como referencial
        console.log("O produto",this.nome, "é da categoria",this.categoria,"e tem", this.quantidade, "Unidades");
        
    },
    //criação de um metodo externo
    verTamanhos : opcoes
}

var produto2 ={
    nome : "Salgado",
    categoria : "Comida",
    quantidade : 10,
    tamanhos : ["Pequeno", "Médio", "Grande"],
    descricao:function(){
        console.log("O produto",this.nome, "é da categoria",this.categoria);
        
    },
   
    verTamanhos : opcoes
}

// THIS
// produto1.descricao()
// produto2.descricao()

function opcoes(){
    let tmhs = ""
    /*for(var i in this.tamanhos){
        tmhs += this.tamanhos[i] + ","
    }
    console.log("As opções são:", tmhs);
    */
    console.log("As opções são:", this.tamanhos.toString());
    
}
produto1.descricao
produto1.verTamanhos()

produto2.descricao
produto2.verTamanhos()


//criando produto 3

var produto3 ={
nome : prompt("Digite o nome do produto:"),  
categoria : prompt("Digite a categoria desse produto:"),
quantidade : prompt("Digite a quantidade desse produto:"),
tamanhos : prompt("Tamanhos (separados por virgula)").split(","),
descricao:function(){
        console.log("O produto",this.nome, "é da categoria",this.categoria);
        
    },
   
    verTamanhos : opcoes
}




console.log(produto3);

