export default function filtroSecoes(){
  const filtroSeries = document.querySelectorAll('.geral__btn');
  const butoes = document.querySelectorAll('.serie__check');
  const menus = document.querySelectorAll('.serie__menu');
  const menuItens = document.querySelectorAll('.serie__menu li');
  
  filtroSeries.forEach(btn => {
    btn.addEventListener("click", () => {
      menus.forEach(menu=>menu.classList.remove('ativo'))
      filtroSeries.forEach(btn1 => btn1.classList.remove('ativo'))
      btn.classList.add('ativo')
    })
  })
  
  butoes.forEach(btn => {
    btn.addEventListener('click', () => {
      menus.forEach(menu => menu.classList.toggle('ativo'))
    })
  })
  menuItens.forEach(item => {
    item.addEventListener('click', () => {
      menus.forEach(menu=>menu.classList.remove('ativo'))
    })
  })
}
