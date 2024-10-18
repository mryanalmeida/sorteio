let faces = [
    { nome: "astra", img: "img/astra.png" },
    { nome: "breach", img: "img/breach.png" },
    { nome: "brimstone", img: "img/brimstone.png" },
    { nome: "chamber", img: "img/chamber.png" },
    { nome: "clove", img: "img/clove.png" },
    { nome: "cypher", img: "img/cypher.png" },
    { nome: "deadlock", img: "img/deadlock.png" },
    { nome: "fade", img: "img/fade.png" },
    { nome: "gekko", img: "img/gekko.png" },
    { nome: "harbor", img: "img/harbor.png" },
    { nome: "iso", img: "img/iso.png" },
    { nome: "jett", img: "img/jett.png" }, // Carta rara
    { nome: "kayo", img: "img/kayo.png" },
    { nome: "killjoy", img: "img/killjoy.png" },
    { nome: "neon", img: "img/neon.png" },
    { nome: "omen", img: "img/omen.png" },
    { nome: "phoenix", img: "img/phoenix.png" }, // Carta rara
    { nome: "raze", img: "img/raze.png" },
    { nome: "reyna", img: "img/reyna.png" }, // Carta rara
    { nome: "sage", img: "img/sage.png" },
    { nome: "skye", img: "img/skye.png" },
    { nome: "sova", img: "img/sova.png" },
    { nome: "viper", img: "img/viper.png" },
    { nome: "vyse", img: "img/vyse.png" },
    { nome: "yoru", img: "img/yoru.png" },
];

let raras = ["jett", "phoenix", "reyna"]; // Personagens raros

function sortear() {
    let index = Math.floor(Math.random() * faces.length);
    let face = faces[index];

    let cc = document.getElementById('centro');
    cc.innerHTML = `<img src="${face.img}" alt="${face.nome}" style="width: 100%; height: auto;">`;

    let cartaDiv = document.querySelector('.carta');
    let raroIndicador = document.getElementById('raro-indicador');
    let comumIndicador = document.getElementById('comum-indicador');

    if (raras.includes(face.nome)) {
        cartaDiv.classList.add('rara');
        cartaDiv.classList.remove('comum');
        raroIndicador.classList.remove('oculto');
        comumIndicador.classList.add('oculto');
        raroIndicador.innerText = "Personagem RARO";
    } else {
        cartaDiv.classList.add('comum');
        cartaDiv.classList.remove('rara');
        comumIndicador.classList.remove('oculto');
        raroIndicador.classList.add('oculto');
        comumIndicador.innerText = "Personagem COMUM";
    }
}
