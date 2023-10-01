



//  pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

const botoes = document.querySelectorAll(".botao")


//  pegar os personagens no JS pra poder mostrar ou esconder ele

const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao,i) => {
    botao.addEventListener("click", () => {
        // verificar se já existe um botão selecionado, se sim, devemos remover 
        // a seleção dele 
        removeButtonClass();
        //  adicionar a classe "selecionado" no botão que o usuário clicou
        addButtonClass(botao);

        // verificar se já exista um personagem selecionado, se sim, devemos remover
        removePersonClass();

        //  adicionar a classe "selecionado" no personagem que o usuário selecionou
        addPersonClass(i);

    })
})

function addPersonClass(i) {
    personagens[i].classList.add("selecionado");
}

function removePersonClass() {
    personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function addButtonClass(botao) {
    botao.classList.add("selecionado");
}

function removeButtonClass() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
