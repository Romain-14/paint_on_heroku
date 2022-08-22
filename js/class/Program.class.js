import Pen from "./Pen.class.js";
import Slate from "./Slate.class.js";
import ColorPalette from "./ColorPalette.class.js";
// dans cette class on va avoir les gestionnaires d’événement et leurs méthodes
// attention cette fois-ci on passe sur une méthode spécifique au démarrage de l'application pour mettre en place nos écouteurs

// instancier les class ColorPalette, Pen, Slate

export default class Program {

    constructor(){
        this.colorPalette = new ColorPalette();
        this.pen = new Pen();
        this.slate = new Slate(this.pen);
    }

    onClickPenColor(e){
        this.pen.setColor($(e.target).data("color"));
    }
    
    onClickPenSize(e){
        this.pen.setSize($(e.target.parentNode).data("size"));
    }

    changeDraw(e){
        // $("#slate").removeClass("newSlate");
        if(e.target.value === "new"){
            $("#slate").addClass("newSlate");
            // $("#slate").add("newSlate");
            $("#slate").css({backgroundColor: "#FFF", backgroundImage: ""});
            
        } else {
            $("#slate").removeClass("newSlate");
            // $("#slate").remove("newSlate");
            $("#slate").css({background:`url(assets/img/${e.target.value}.jpg) center / contain no-repeat`});
        }
        // this.slate.clear();
    }

    onClickColorPicker() {
        // on affiche la palette de dégradé
        $('#color-palette').fadeIn('slow');
    }

    onPickColor() {
        // Récupération de la couleur sur laquelle l'utilisateur a cliqué.
        const {red, green, blue } = this.colorPalette.getPickedColor();

        // Changement de la couleur du crayon.
        this.pen.setColorAsRgb(red, green, blue);

        // on cache la palette de dégradé
        $('#color-palette').fadeOut('slow');
    }    

    start(){
        $("#tool-clear-slate").on("click", () => this.slate.clear()) // en interaction avec l'objet slate
        // event color-picker
        $('#tool-color-picker').on('click', this.onClickColorPicker);

        $(".pen-color").on("click", (e) => this.onClickPenColor(e));
        $(".fa-lines-leaning").on("click", (e) => this.onClickPenSize(e));

        $('#color-palette').on('click', () => this.onPickColor());
        // avec un custom event
        // document.addEventListener("magical-slate:pick-color", () => this.onPickColor());
        
        // choix du dessin
        $("#draw").on("change", (e) => {
            this.changeDraw(e, this)
        });
    }


}