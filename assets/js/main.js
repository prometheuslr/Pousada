/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle','nav-menu')

/*==================== SWIPER JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0, // ou um número adequado
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

  
/*==================== POPUP ====================*/
const btnOpenVideo = document.querySelectorAll('.pousada__video-content')
const pousadaPopup = document.getElementById('popup')

function poPup(){
    pousadaPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', ()=> {
    pousadaPopup.classList.remove('show-popup')
})

/*==================== GSAP ANIMATION ====================*/
const controlImg = document.querySelectorAll('.controls__img')

function scrollAnimation(){
    gsap.from('.pousada__subtitle', {opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.pousada__title', {opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.pousada__description', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.pousada__button', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.pousada__video-content', {opacity: 0, duration: .6, delay: .6, y: -20})

    pousadaPopup.classList.remove('show-popup')
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))



