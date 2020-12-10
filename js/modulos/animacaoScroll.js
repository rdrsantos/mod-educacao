export default function animaScroll(){
  const itens = document.querySelectorAll("[data-anima]");
  window.addEventListener('scroll', () => {
  const wHeight = window.scrollY + (window.innerHeight * .80);
  itens.forEach(item => {
    if(item.offsetTop < wHeight){
      item.classList.add('ativo');
    }
  })
})
}

