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
let votoBranco = false;
let votos = [];


//functions

document.body.addEventListener('keyup', (event) => {
    let numeral = event.key

    let int = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (int.indexOf(numeral) != -1) {
        clicou(numeral)
    } else {
        alert('Digite Somente Numeros')
    }
});


function showWay() {
    let etapa = way[etapaAtual];
    let numeroHtml = '';
    numero = '';
    votoBranco = false;

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
            if(candidato.fotos[i].small){
                fotosHtml += `<div class="s-1-image small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            } else{
                fotosHtml += `<div class="s-1-image"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = fotosHtml;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="warning onoff">VOTO NULO</div>';
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
    if(numero === ''){
        votoBranco = true;
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="warning onoff">VOTO BRANCO</div>';
    } else {
        alert("Para Votar em BRANCO, não pode ter digitado nenhum número.")
    }
}

function corrige() {
    showWay();
}

function confirma() {
    let etapa = way[etapaAtual];

    let votoConfirmado = false;

    if(votoBranco === true) {
        votoConfirmado = true;
        votos.push({
            etapa: way[etapaAtual].titulo,
            voto:'branco'
        });
    } else if(numero.length === etapa.numeros) {
        votoConfirmado = true;
        votos.push({
            etapa: way[etapaAtual].titulo,
            voto:'numero'
        });
    }

    if(votoConfirmado) {
        etapaAtual++;
        if(way[etapaAtual] !== undefined){
            showWay();
        } else {
            document.querySelector('.screen').innerHTML = '<div class="otherwarning onoff">FIM</div>';
            console.log(votos);
        }
    }
}


showWay()