// lié au canvas, on y place nos gestionnaire d’événement de dessin et sa configuration
// différente méthode lié au dessin (déplacement de la souris)


export default class Slate {

    constructor(pen){
        this.ctx       = $("#slate")[0].getContext("2d");
        this.isDrawing = false;
        this.pen       = pen; 
        $("#slate")
            .mousedown((e) => this.onMouseDown(e))
            .mouseleave((e) => this.onMouseLeave(e))
            .mousemove((e) => this.onMouseMove(e))
            .mouseup  ((e) => this.onMouseUp(e));
    }

    clear() {
        this.ctx.clearRect(0, 0, $("#slate")[0].width, $("#slate")[0].height);
    }

    getMousePosition(e) {        
        return {x: e.offsetX, y: e.offsetY}
    }

    onMouseDown(e){
        this.isDrawing = true;
        this.currentPosition = this.getMousePosition(e);
    }

    onMouseLeave() {
        this.isDrawing = false;
    }

    onMouseMove(e) {
        const position = this.getMousePosition(e);
        if (this.isDrawing) {
            this.pen.configure(this.ctx);
            this.ctx.beginPath();
            this.ctx.moveTo(this.currentPosition.x, this.currentPosition.y);
            this.ctx.lineTo(position.x, position.y);
            this.ctx.closePath();
            this.ctx.stroke();
            this.currentPosition = position;
        }   
    }

    onMouseUp() {
        this.isDrawing = false;
    }
}