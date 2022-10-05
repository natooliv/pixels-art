let salveLocal = [];

/*---------------------------------Selecionando Cor e Mudando dinamicamente------------------*/

function coresAleatorias() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

function pintarBu() {
  const cores = document.getElementsByClassName('color');
  const bu = document.getElementById('button-random-color');
  bu.addEventListener('click', () => {
    for (let index = 1; index < cores.length; index += 1) {
      cores[index].style.backgroundColor = coresAleatorias();
    }
    for (let index = 0; index < cores.length; index += 1) {
      salveLocal.push(cores[index].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', JSON.stringify(salveLocal));
    salveLocal = [];
  });
}

function estilo() {
  const cores = document.getElementsByClassName('color');
  for (let index = 0; index < cores.length; index += 1) {
    cores[index].style.margin = '3px';
    cores[index].style.border = '1px solid black';
    cores[index].style.width = '60px';
    cores[index].style.height = '60px';
    cores[index].style.boxShadow = '2px 5px 10px rgba(0, 0, 0, 0.6)';
  }
}

function pintQuadro() {
  const cores = document.getElementsByClassName('color');
  for (let index = 0; index < cores.length; index += 1) {
    if (index === 0) {
      cores[index].style.backgroundColor = 'black';
    } else {
      cores[index].style.backgroundColor = coresAleatorias();
    }
  }
}

function salvarBu() {
  const cores = document.getElementsByClassName('color');
  const pegaCor = JSON.parse(localStorage.getItem('colorPalette'));
  if (pegaCor === null) {
    pintQuadro();
    for (let index = 0; index < cores.length; index += 1) {
      salveLocal.push(cores[index].style.backgroundColor);
      console.log(cores[index].style.backgroundColor);
    }
    localStorage.setItem('colorPalette', JSON.stringify(salveLocal));
    salveLocal = [];
  } else {
    for (let index2 = 0; index2 < cores.length; index2 += 1) {
      cores[index2].style.backgroundColor = pegaCor[index2];
    }
    console.log(pegaCor);
  }
}
estilo();
pintarBu();
salvarBu();

function quadradoP(num) {
  const coluna = num;
  for (let index = 0; index < coluna; index += 1) {
    const quadradoPI = document.getElementById('pixel-board');
    const linhaCol = document.createElement('div');
    linhaCol.className = 'linha';
    quadradoPI.appendChild(linhaCol);
    for (let index3 = 0; index3 < coluna; index3 += 1) {
      const pixelLin = document.createElement('div');
      pixelLin.className = 'pixel';
      quadradoPI.appendChild(pixelLin);
    }
  }
}
const allcolors = document.getElementsByClassName('color');

function removSele() {
  for (const select of allcolors) {
    select.addEventListener('click', function (event) {
      const selectColor = document.querySelector('.selected');
      selectColor.classList.remove('selected');
      event.target.classList.add('selected');
      console.log(select);
    });
  }
}

function putColor() {
  const allpixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < allpixels.length; index += 1) {
    allpixels[index].addEventListener('click', function (e) {
      const corAtual = document.querySelector('.selected');
      console.log(corAtual);
      const finalColor = window.getComputedStyle(corAtual).backgroundColor;
      e.target.style.backgroundColor = finalColor;
    });
  }
}
function limparTudo() {
  const palletCollor = document.querySelectorAll('.pixel');
  palletCollor.forEach((e) => {
    e.style.backgroundColor = 'white';
  });
}

estilo();
pintarBu();
salvarBu();
quadradoP(5);
removSele();
putColor();
limparTudo();
