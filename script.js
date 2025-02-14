let video = document.getElementById('video')
let cardVideo = document.getElementById('cardVideo')
let apagar = document.getElementById('apagar')
let audio = document.getElementById('audio')
let aviso = document.getElementById('aviso')

document.addEventListener(
  'click',
  function () {
    audio.play()
    video.play()

    aviso.style.display = 'none'

    video.onended = function () {
      setTimeout(function () {
        cardVideo.style.display = 'none'
        apagar.style.display = 'flex'
      }, 500)
    }
  },
  { once: true }
)

// BARRA DE CARREGAMENTO

let barras = document.querySelectorAll('.bloco')
let porcentagem = document.getElementById('progresso')

let progresso = 0
let maxProgresso = 97 // Parar em 97%

function carregar() {
  if (progresso < maxProgresso) {
    let index = Math.floor((progresso / 100) * barras.length)
    if (index < barras.length) {
      barras[index].style.background = 'blue'
    }

    progresso++
    porcentagem.textContent = `${progresso}%`

    setTimeout(carregar, 100) // Tempo de carregamento
  } else {
    avisosFinais()
  }
}

let btn_excluir = document.getElementById('btn-excluir')
let btn_carregar = document.getElementById('container-carregamento')

btn_excluir.addEventListener('click', () => {
  btn_carregar.style.display = 'block'
  carregar()
})

let gif = document.getElementById('gif')

function avisosFinais() {
  gif.style.display = 'flex'

  setTimeout(() => {
    gif.style.display = 'none'
    document.querySelector('.erro').style.display = 'flex'
  }, 4000)
}
