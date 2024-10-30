var img1 = "cat.png";
var img2 = "catnew.png";
var cor1 = "#01FF23";
var cor2 = "000";
var t1 = "My Title";
var t2 = "Meu Título";


function trocarimg(){
    document.getElementById("fig").src = img1;
    let aux = img1;
    img1 = img2;
    img2 = aux;
}

function parcor(){
    document.getElementById("par").style.color = cor1;
    let aux1 = cor1;
    cor1 = cor2;
    cor2 = aux1;
}

function titlech(){
    document.getElementById("chtitle").textContent = t1;
    document.title = t1;
    let aux2 = t1;
    t1 = t2;
    t2 = aux2;
}

function playa(){
    const audio = new Audio();
    audio.src = "explosion.wav";
    audio.play();
}

function chang(){
    const allc = document.querySelectorAll('.gg');
    allc.classList.add('nova');
}