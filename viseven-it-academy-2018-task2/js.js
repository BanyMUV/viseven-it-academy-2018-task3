var bomba = document.getElementById('bomba');
var cat = document.getElementById('cat');
var puf = document.getElementById('puf');
var pop = document.getElementById('pop');
var boom = document.getElementById('boom');
var effects = document.getElementById('effects');
function myFunction(){
    bomba.style.width = 90 + "px";
    bomba.style.height = 300 + "px";
    puf.style.display = "block";
    cat.style.left ="500px";
    cat.style.top ="100px";
    cat.style.animation = "none";
    pop.style.display = "block";
    boom.style.display = "none";
    effects.style.display = "block";
    var audio = new Audio();
    audio.src = 'myaukane_koshki_-_slushat_koshkam.mp3';
    audio.autoplay = true;
}
