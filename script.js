function coresAleatorias() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

function randomColors() {
  const buttom = document.getElementById('button-random-color');
  const cores = document.getElementsByClassName('color');

  buttom.addEventListener('click', () => {
    for (let index = 1; index < cores.length; index += 1) {
      cores[index].style.backgroundColor = coresAleatorias();
    }
  });
}
randomColors();
//-----------------------------------