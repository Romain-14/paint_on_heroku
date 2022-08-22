// lié au canvas, on y place nos gestionnaire d’événement de dessin et sa configuration
// différente méthode lié au dessin (déplacement de la souris)


export default class Slate {

    //constructor
        //récupérer le canvas, son contexte

        // récupérer l'objet Pen

        // initialiser une propriété pour la position actuelle (option)

        // initialiser une propriété pour le fait de ne pas dessiner

        // installer les écouteurs de mouvement de la souris
        // - mouseup
        // - mousedown
        // - mousemove
        // - mouseleave

    // méthode
    // - clearSlate  via une méthode spécifique, va reset l'ardoise
    // - getPosition (va retourner les offset y et y)
    // - onMouseUp   (est ce que je dessine encore ou pas ?)
    // - onMouseDown  (est ce que je dessine encore ou pas ? et quelle est la position actuelle de la souris)
    // - onMouseMove  quelle est la nouvelle position de la souris, puis ai la permission de dessiner , si c'est le cas alors on configure notre pinceau(en transmettant le contexte) et on dessine ( attention pour le déplacement à la position actuelle et la nouvelle)
    // - onMouseLeave (est ce que je dessine encore ou pas ?)
    // - draw 
    
}