import Program from './class/Program.class.js';
// quand le document HTML est prêt, lancement de notre application via une instanciation et une méthode

$(function (){
    const prg = new Program();
    prg.start();
});