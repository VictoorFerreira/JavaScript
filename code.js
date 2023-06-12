cont estatisticas = document.querySelectorAll("[data-estatisticas]").
console.log(estatisticas)

--------------------------------------------------------------------------------
cont estatistica = document.querySelectorAll("[data-estatistica]").
console.log(estatistica)

----------------------------------------------------------------------------------
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.datasete.controle, evento.target.parentNode)
        atualizaEstatistica()
    })
})

-------------------------------------------------------------------------------
function atualizaEstatistica() {

}

---------------------------------------------------------------------------------
controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.controle)
    })
})


------------------------------------------------------
function atualizaEstatistica() {
    console.log(peca)

--------------------------------------------------------
function atualizaEstatistica() {
    console.log(peca[peca])

}

--------------------------------------------------------
function atualizaEstatistica() {
    console.log(peca[peca])

    estatistica.forEach(elemento)

}

--------------------------------------------------------
function atualizaEstatistica() {
    console.log(peca[peca])

    estatistica.forEach( (elemento) =>
    console.logo(elemento.textContent)
    })
}

--------------------------------------------------------
console.log(dataset.estatistica)

--------------------------------------------------------
funtion atualizaEstatistica(peca) {
    estatistica.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}