export default function filtroSeries(){
  const filtroSeries = document.querySelectorAll('.geral__btn');
  const series = document.querySelectorAll('.serie');
  const indicador = document.querySelector('.geral__titulo h1');

  series.forEach(serie => {
    filtroSeries.forEach(btn => {
      btn.addEventListener('click', () => {
        serie.style.display = 'none'
        if(btn.id === serie.id){
          serie.style.display = 'grid';
          indicador.innerHTML = btn.innerHTML;
        }
      })
    })
  })
}