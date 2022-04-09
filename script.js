const sons = ['aplausos', 'boo', 'suspiro', 'tada', 'vitoria', 'erro']

sons.forEach(som => {
    const botao = document.createElement('botao')
    botao.classList.add('botao')

    botao.innerText = som

    botao.addEventListener('click', () => {
        pareMusicas()

        document.getElementById(som).play()
    })

    document.getElementById('botoes').appendChild(botao)
})

function pareMusicas() {
    sons.forEach(som => {
        const musica = document.getElementById(som)

        musica.pause()
        musica.currentTime = 0;
    })
}