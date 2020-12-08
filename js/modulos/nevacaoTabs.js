export default function navegacaoTabs(){
  const menuQuinto = document.querySelectorAll('#quinto .serie__menu li');
  const divsQuinto = document.querySelectorAll("#quinto .serie__conteudo section");
  const menuNono = document.querySelectorAll('#nono .serie__menu li');
  const divsNono = document.querySelectorAll("#nono .serie__conteudo section");
  const menuMedio = document.querySelectorAll('#medio .serie__menu li');
  const divsMedio = document.querySelectorAll("#medio .serie__conteudo section");
  const indicador = document.querySelector('.geral__titulo h1')

  function activeTab(secoes, index){
    secoes.forEach(secao => secao.style.display = 'none')
    secoes[index].style.display = 'block'
  }

  if(menuQuinto.length && divsQuinto){
    menuQuinto.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        activeTab(divsQuinto,index)
        indicador.innerText = `${btn.innerHTML} - 5° ano`
        menuQuinto.forEach(btn => {
          btn.classList.remove('ativo');
        })
        btn.classList.add('ativo');
      })
    })
  }
  if(menuNono.length && divsNono){
    menuNono.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        activeTab(divsNono,index)
        indicador.innerHTML = `${btn.innerHTML} - 9° ano`
        menuNono.forEach(btn => {
          btn.classList.remove('ativo');
        })
        btn.classList.add('ativo');
      })
    })
  }

  if(menuMedio.length && divsMedio){
    menuMedio.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        activeTab(divsMedio,index)
        indicador.innerHTML = `${btn.innerHTML} - Ensino Médio`;
        menuMedio.forEach(btn => {
          btn.classList.remove('ativo');
        })
        btn.classList.add('ativo');
      })
    })
  }
}


