class Animal{

    constructor(nome, idade, preco){
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque(){
        console.log(10);
    }

}

class Cachorro extends Animal {

    Latir(){
        console.log("Auuu Auuu...");
    }

    ChecarEstoque(){
        console.log("Checando o estoque na loja: " + 22);
    }

}

class Gato extends Animal {

    Miar(){
        console.log("Miiiiaauuuuuuu...");
    }

}

var cachorro = new Cachorro("Dog", 5, 250);
cachorro.ChecarEstoque();
cachorro.Latir();

var gato = new Gato("Cat", 2, 199);
gato.ChecarEstoque();
gato.Miar();

