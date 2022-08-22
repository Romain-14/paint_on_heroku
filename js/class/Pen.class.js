// configure notre "pinceau" avec des propriété par défaut et leur "setter"
// il y aura aussi une méthode pour configurer le pinceau sur l'ardoise (slate)

export default class Pen {

    constructor(){
        this.color = "black";
        this.size  = 3;
    }

    // méthode de préparation de l'ardoise à l’exécution d'un dessin avec ce crayon (méthode qui sera appelé dans l'objet Slate)

    // mise à jour de la couleur et la taille sur les propriétés du contexte correspondant
    configure(slateCtx) {
        // Mise à jour des propriétés de dessin de l'ardoise.
        slateCtx.strokeStyle = this.color;
        slateCtx.lineWidth = this.size;
    }

    setColor(color){
        this.color = color;
    }

    setSize(size){
        this.size = size;
    }

    setColorAsRgb(red, green, blue) {
        // Stockage de la couleur au format RGB (comme la fonction CSS)
        this.color = `rgb(${red},${green},${blue})`;
    }

}