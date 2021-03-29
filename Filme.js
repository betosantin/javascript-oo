class Filme {

    constructor(titulo, ano, genero, diretor, atores, duracao){

        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;

    }

    Reproduzir(){
        console.log("Reproduzindo...");
    }

    Pausar(){
        console.log("Pausar...");
    }

    Avancar(){
        console.log("Avancar...");
    }

    Fechar(){
        console.log("Fechar...");
    }

    Ficha(){
        console.log("Título: " + this.titulo);
        console.log("Ano: " + this.ano);
        console.log("Gênero: " + this.genero);
        console.log("Diretores: " + this.diretor);
        console.log("Atores: " + this.atores);
        console.log("Duração: " + this.duracao);
    }

}

var vingadores = new Filme("Vingadores 2", "2018", "Ação", "João e José", "Marquinhos e Julieta", "138 minutos");
var hulk = new Filme("Hulk", "2004", "Ação", "Jorge e Tobias", "Fulano e Ciclano", "113 minutos");

vingadores.Ficha();
hulk.Ficha();

