const listaProdutos = [
    {
        "nome" : "Uva Crimson",
        "preco" : 44.99
    },
    {
        "nome" : "Vinho Canção",
        "preco" : 17.98
    },
    {
        "nome": "Água de côco",
        "preco" : 8.99
    },
    {
        "nome" : "Mamão",
        "preco" : 9.98
    },
    {
        "nome" : "Água Tônica",
        "preco" : 17.98
    }
]

function add (arr){
    let soma = 0
    for(let i = 0; i < listaProdutos.length; i++){
        soma+= listaProdutos[i].preco
    }
    return `Total: ${soma}`
}

const title = document.createElement('div')
const title2 = document.createElement('span')
const title3 = document.createElement('span')
const main = document.createElement('main')
const button = document.createElement('button')
const lista = document.createElement('ul')
const section = document.createElement('section')

main.appendChild(title)
title.appendChild(title2)
title.appendChild(title3)
title2.innerText = "item"
title3.innerText = "valor"
document.querySelector('body').appendChild(main)
main.appendChild(lista)


for(let i = 0; i < listaProdutos.length; i++){
    let listaItem = document.createElement('li')
    listaItem.innerHTML = `<label class="negrito">${listaProdutos[i].nome} </label><label> ${listaProdutos[i].preco}</label>`
    lista.appendChild(listaItem)
}


main.appendChild(section)
section.innerText = add(listaProdutos)
section.appendChild(button)
button.innerText = "Finalizar"





