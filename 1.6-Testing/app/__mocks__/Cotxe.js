class Cotxe{
    constructor(marca){
        if(this.constructor === Cotxe){
            throw new Error("No es pot crear una clase abstracta");
        };
        this.model = marca;
    }
    getmodel() {
        throw new Error("No es pot accedir al metode d'una clase abstracta directament");
        }
}


module.exports = {
    Cotxe
}