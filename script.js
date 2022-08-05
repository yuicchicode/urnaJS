//Control Variebles
let seuVotoPara = document.querySelector('.s-1-1 span');
let cargo = document.querySelector('.s-1-2 span');
let descricao = document.querySelector('.s-1-4');
let aviso = document.querySelector('.s-2');
let lateral = document.querySelector('.s-1-right');
let numeros = document.querySelector('.s-1-3');

// Ambient Variables

let etapaAtual = 0;
let numero = '';


//functions


function showWay() {
    let etapa = way[etapaAtual];
    let numeroHtml = '';

    for (let i=0;i<etapa.numeros;i++) {
        if(i === 0){
            numeroHtml += '<div class="number onoff"></div>';
        }else{
            numeroHtml += '<div class="number"></div>';
        }
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    let etapa = way[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero) {
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;

        let fotosHtml = '';
        for(let i in candidato.fotos) {
            fotosHtml += `<div class="s-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
        }
        lateral.innerHTML = fotosHtml;
    }

    console.log('Candidato', candidato);
}

function clicou(n) {
    let elNumber = document.querySelector('.number.onoff');
    if(elNumber !== null){
        elNumber.innerHTML = n;
        numero = `${numero}${n}`;

        elNumber.classList.remove('onoff');
        if(elNumber.nextElementSibling !== null) {
            elNumber.nextElementSibling.classList.add('onoff');
        } else {
            atualizaInterface();
        }
    }
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