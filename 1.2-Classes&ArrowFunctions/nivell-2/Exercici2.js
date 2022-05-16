class Persona{
    constructor(nom){
        this.nom = nom
    }

    dirNom(){
       return this.nom;
    }
}

const usuari1 = new Persona("Francesc");

console.log(usuari1.dirNom());
