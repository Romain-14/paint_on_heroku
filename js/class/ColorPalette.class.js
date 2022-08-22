// **********************************************************************************
// ********************************* Classe ColorPalette ****************************
// **********************************************************************************

export default class ColorPalette {

    constructor() {
        this.canvas = $("#color-palette")[0];
        // this.canvas = document.getElementById('color-palette');    // Récupération du <canvas>
        this.ctx = this.canvas.getContext('2d');                // Récupération du contexte du canvas
        this.pickedColor = {red: 0, green: 0, blue: 0};

        // Installation des gestionnaires d'évènements de la palette de couleurs.
        $("#color-palette").on('click', (e) => this.onClick(e));
        // Dessine la palette de couleurs possibles.
        this.build();

        // custom event natif voir la suite dans la méthode tout en bas
        // this.myEvent = new Event("magical-slate:pick-color");
    }

    // Méthode de construction graphique de la palette de couleurs
    build() {

        let gradient = this.ctx.createLinearGradient(0, 0, this.canvas.width, 0);

        // Dégradé rouge -> vert -> bleu horizontal.
        gradient.addColorStop(0, 'rgb(255,   0,   0)');
        gradient.addColorStop(0.15, 'rgb(255,   0, 255)');
        gradient.addColorStop(0.32, 'rgb(0,     0, 255)');
        gradient.addColorStop(0.49, 'rgb(0,   255, 255)');
        gradient.addColorStop(0.66, 'rgb(0,   255,   0)');
        gradient.addColorStop(0.83, 'rgb(255, 255,   0)');
        gradient.addColorStop(1, 'rgb(255,   0,   0)');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        gradient = this.ctx.createLinearGradient(0, 0, 0, this.canvas.height);

        // Dégradé blanc opaque -> transparent -> noir opaque vertical.
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0,     0,   0, 0)');
        gradient.addColorStop(1, 'rgba(0,     0,   0, 1)');

        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // Méthode de récupération de la couleur sur laquelle l'utilisateur a cliqué
    getPickedColor() {
        return this.pickedColor;
    }

    // Gestionnaire d'évènement de clic sur un pixel de couleur de la palette
    onClick(e) {      

        /*
         * Création d'un tableau contenant les valeurs RGBA du pixel sur
         * lequel l'utilisateur a cliqué.
         */
        const palette = this.ctx.getImageData(e.offsetX, e.offsetY, 1, 1);

        // Enregistrement des valeurs RGB.
        this.pickedColor.red = palette.data[0];
        this.pickedColor.green = palette.data[1];
        this.pickedColor.blue = palette.data[2];

        /*
         * Déclenchement de l'évènement de l'application,
         * annonçant que l'utilisateur a sélectionné une nouvelle couleur.
         */
        //jquery
        // $.event.trigger(this.myEvent);

        //natif
        // document.dispatchEvent(this.myEvent)
    }
}