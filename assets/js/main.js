/* SHOW MENU */
// Esta função mostra ou esconde o menu quando o botão de toggle é clicado
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)

  if (toggle && nav) {
      toggle.addEventListener('click', () => {
          nav.classList.toggle('show-menu')
      })
  }
}

// Chama a função showMenu passando o ID do botão toggle e o ID do menu como parâmetros
showMenu('nav-toggle', 'nav-menu')

/* SWIPER JS */
// Configuração do Swiper JS para um carrossel de imagens
let galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper('.gallery-top', {
  effect: 'fade',
  loop: true,
  thumbs: {
      swiper: galleryThumbs,
  },

  // Configuração das setas de navegação
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },

  // Eventos de teclado personalizados
  keyboard: {
      enabled: true, // Habilita os eventos de teclado
      onlyInViewport: false, // Permite que os eventos de teclado funcionem em qualquer lugar na página
  }
});


/* POPUP */
// Função para abrir o popup do vídeo
const btnOpenVideo = document.querySelectorAll('.pousada__video-content')
const pousadaPopup = document.getElementById('popup')

function poPup() {
  pousadaPopup.classList.add('show-popup')
}
// Adiciona o evento de clique para cada botão de abrir vídeo
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('popup-close')

// Evento de clique para fechar o popup do vídeo
btnCloseVideo.addEventListener('click', () => {
  pousadaPopup.classList.remove('show-popup')
})

/* GSAP ANIMATION */
// Função para animação usando a biblioteca GSAP
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation() {
  // Animação de fade-in para vários elementos
  gsap.from('.pousada__subtitle', { opacity: 0, duration: .2, delay: .2, y: -20 })
  gsap.from('.pousada__title', { opacity: 0, duration: .3, delay: .3, y: -20 })
  gsap.from('.pousada__description', { opacity: 0, duration: .4, delay: .4, y: -20 })
  gsap.from('.pousada__button', { opacity: 0, duration: .5, delay: .5, y: -20 })
  gsap.from('.pousada__video-content', { opacity: 0, duration: .6, delay: .6, y: -20 })

  pousadaPopup.classList.remove('show-popup')
}

// Adiciona o evento de clique para cada imagem de controle
controlImg.forEach(c => c.addEventListener('click', scrollAnimation))
