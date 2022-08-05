//Control Variebles
let seuVotoPara = document.querySelector('.s-1-1 span');
let cargo = document.querySelector('.s-1-2 span');
let descricao = document.querySelector('.s-1-4');
let aviso = document.querySelector('.s-2');
let lateral = document.querySelector('.s-1-right');
let numeros = document.querySelector('.s-1-3');

// Ambient Variables

let etapaAtual = 0;

function showWay() {
    let etapa = way[etapaAtual];
    let numeroHtml = '';

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function clicou(n) {
    alert ("clicou em "+n);
}

function branco(){
    alert ("clicou em BRANCO");
}

function corrige() {
    alert ("clicou em CORRIGE");
}

function confirma() {
    alert ("clicou em Confirma");
}


showWay()