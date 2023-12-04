document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    // section ATTRACTIONS
    buttons.forEach((botao) => {
        botao.addEventListener('click', mudaAba)
    })
})

function mudaAba(element) {    
    console.log(element)
    const aba = element.target.dataset.tabButton    
    const abaAlvo = document.querySelector(`[data-tab-id = ${aba}]`)    
    escondeAba()
    abaAlvo.classList.add('attractions__list--is-active')
    removeBotaoAtivo()
    element.target.classList.add('attractions__links__link--is-active')
}

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    
    buttons.forEach((botao) => {
        botao.classList.remove('attractions__links__link--is-active')
    })
}

function escondeAba() {
    const tabsContainer = document.querySelectorAll('[data-tab-id')

    tabsContainer.forEach((tabContainer) => {
        tabContainer.classList.remove('attractions__list--is-active')
    })
}