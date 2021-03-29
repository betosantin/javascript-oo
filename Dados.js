class Dado {

    constructor(face){
        this.face = face;
    }

    Rolar(){
        console.log(this.GetRandomIntIncluse(1, this.face));
    }

    GetRandomIntIncluse(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

var dado = new Dado(8);
dado.Rolar();

dado = new Dado(6);
dado.Rolar();

dado = new Dado(7);
dado.Rolar();

dado = new Dado(9);
dado.Rolar();

dado = new Dado(10);
dado.Rolar();