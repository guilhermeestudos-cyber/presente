const musica = document.getElementById("musica");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {

musica.play();

playBtn.innerHTML = "🎵 Tocando...";
});

function abrirCarta(){

document.getElementById("carta").style.display = "block";
}

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(item => {

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

item.classList.add("active");
}

});
});

function atualizarContador(){

const inicio = new Date("2026-06-17");

const hoje = new Date();

const diff = hoje - inicio;

const dias = Math.floor(
diff / (1000 * 60 * 60 * 24)
);

document.getElementById("dias").innerHTML =
`✨ ${dias} dias desde que tudo começou`;
}

atualizarContador();

function criarFlor(){

const flor = document.createElement("div");

flor.classList.add("flor");

const emojis = ["🌸","🌺","✨","💖"];

flor.innerHTML =
emojis[Math.floor(Math.random()*emojis.length)];

flor.style.left =
Math.random()*100 + "vw";

flor.style.animationDuration =
(5 + Math.random()*8) + "s";

document.body.appendChild(flor);

setTimeout(()=>{
flor.remove();
},12000);
}

setInterval(criarFlor,700);

window.dispatchEvent(new Event("scroll"));