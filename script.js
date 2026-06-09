
const input = document.getElementById("input-tarefa")
const botao = document.getElementById("botao-adicionar")
const lista = document.getElementById("lista")

input.focus()

function adicionarTarefa() {
    const valorDigitado = input.value

    
    if (valorDigitado.trim() != '' ) {
        const item = document.createElement("li")
        item.textContent = valorDigitado.trim()
        const botaoRemover = document.createElement("button")
        botaoRemover.classList.add("botao-excluir")
        botaoRemover.textContent = "Excluir"
        item.append(botaoRemover)
        lista.append(item)
        botaoRemover.addEventListener("click", function() {
            item.remove()
        })
    }
    else {
        console.log('O nome do item não pode estar em branco.')
    }
    
    input.value = ''
}

botao.addEventListener("click", adicionarTarefa)
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa()
    }
})