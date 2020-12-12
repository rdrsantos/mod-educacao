export default function menuMobile(){
  const links = document.querySelectorAll('.header__item');
  const btnMobi = document.querySelector('.header__btn')
  const menu = document.querySelector('.header__menu')

  btnMobi.addEventListener('click', ()=>{
    btnMobi.classList.toggle('ativo')
    menu.classList.toggle('ativo')
  })


  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('ativo')
    }) 
  })
} 

