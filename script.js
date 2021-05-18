const treinoA = document.querySelector('.treino-a');
const treinoB = document.querySelector('.treino-b');
const btnA = document.querySelector('.btn-a');
const btnB = document.querySelector('.btn-b');
const btnF = document.querySelectorAll('button');

function finalizar(event) {
  console.log(event.target.closest('.card-treino'))
  event.target.closest('.card-treino').classList.add('finalizado');
}

function mostrarLista(event) {
  if (event.target.innerText === 'A') {
    console.log('teste');
    btnA.classList.add('btn-ativo');
    treinoA.classList.add('ativo');
    treinoB.classList.remove('ativo');
    btnB.classList.remove('btn-ativo');
  } else {
    console.log('teste');
    btnB.classList.add('btn-ativo');
    treinoB.classList.add('ativo');
    treinoA.classList.remove('ativo');
    btnA.classList.remove('btn-ativo');
  }
}

btnA.addEventListener('click', mostrarLista);
btnB.addEventListener('click', mostrarLista);

btnF.forEach(btn => {
  btn.addEventListener('click', finalizar)
})

console.log(btnF);