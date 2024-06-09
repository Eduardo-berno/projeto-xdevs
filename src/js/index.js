//pegar elemento da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar")
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    //para no ultimo cartao
    if (cartaoAtual === cartoes.length - 1) return;
    //esconder cartao anterior
    escondercartaoselecionado();
    //fazer aparecer o proximo cartao colocando a classe selecionado nele
    cartaoAtual++;
    mostrarcartaoselecionado();
})

//identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    //para no ultimo cartao
    if (cartaoAtual === 0) return;
    //esconder cartao anterior
    escondercartaoselecionado();
    //fazer aparecer o proximo cartao colocando a classe selecionado nele
    cartaoAtual--;
    mostrarcartaoselecionado();
})
function mostrarcartaoselecionado() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function escondercartaoselecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}

