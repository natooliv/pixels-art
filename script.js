// ---------------------Arrays Vazios---------------------------------/

let salveLocal = [];
let salveDesenho = [];
// ---------------------------------Selecionando Cor Aleatoriamente ------------------/

function coresAleatorias() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}
// --------------------------------------------------------------Criando bottão para o tamanho dos pixels dinamicamente -------------/
function createButton() {
  const boardDiv = document.getElementById('board');
  const button = document.createElement('button');
  button.id = 'generate-board';
  button.innerText = 'VQV';
}
function boardUser() {
  const board = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');

  let inputValue = input.value;
  if (!inputValue) return alert('Board inválido!');
  if (inputValue < 5) {
    deletaBord();
    inputValue = 5;
    localStorage.setItem('boardSize', inputValue);
  } else if (inputValue > 50) {
    deletaBord();
    inputValue = 50;
    localStorage.setItem('boardSize', inputValue);
  } else if (inputValue >= 5 || inputValue <= 50) {
    deletaBord();
    inputValue = input.value;
    localStorage.setItem('boardSize', inputValue);
  }

  board.style.height = inputValue * 44 + 'px';
  board.style.width = inputValue * 44 + 'px';
  const matriz = inputValue ** 2;
  for (let index = 0; index < matriz; index += 1) {
    const divs = document.createElement('div');
    divs.classList.add('pixel');
    board.appendChild(divs);
  }
  putColor();
}
function storgeI() {
  const board = document.getElementById('pixel-board');
  const inputValue = localStorage.getItem('boardSize');
  if (inputValue !== null) {
    board.style.height = inputValue * 44 + 'px';
    board.style.width = inputValue * 44 + 'px';
    const matriz = inputValue ** 2;
    for (let index = 0; index < matriz; index += 1) {
      const divs = document.createElement('div');
      divs.classList.add('pixel');
      board.appendChild(divs);
    }
    putColor();
  } else {
    quadradoP(5);
    putColor();
  }
}

function chamaEvento() {
  const evento = document.getElementById('generate-board');
  evento.addEventListener('click', boardUser);
}

function deletaBord() {
  const del = document.getElementById('pixel-board');
  del.innerHTML = '';
}

// -------------------Adicione um botão para gerar cores aleatórias para a paleta de cores.----------------------/

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
// ----------------------------Os elementos da paleta de cores devem ter borda preta, sólida e com 1 pixel de largura------//

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
// ------------------------------------ A primeira cor na paleta criada no requisito 2 deve ser preta. As demais cores podem ser escolhidas livremente //

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
// - ---------------------------As cores da paleta de cores que foram geradas aleatoriamente devem ser mantidas após recarregar a página-------//

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

// ----------------------------------------------- Adicionando Pixels --------------------------------------------------------//

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

// ----------------------------------------------------------Cor selecionada para preenchimento do quadro---------------------------//
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
//
// -----------------------------O quadro clicado deve ter sua cor alterada para a cor selecionada na paleta de cores ----------------//

function putColor() {
  const allpixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < allpixels.length; index += 1) {
    allpixels[index].addEventListener('click', function (e) {
      salveDesenho = [];
      const corAtual = document.querySelector('.selected');
      console.log(corAtual);
      const finalColor = window.getComputedStyle(corAtual).backgroundColor;
      e.target.style.backgroundColor = finalColor;
      salvandoPixel();
    });
  }
}
// ------------------------------------------------------Botão de Limpar--------------------------------------------------------//

function limparTudo() {
  const palletCollor = document.querySelectorAll('.pixel');
  palletCollor.forEach((e) => {
    e.style.backgroundColor = 'white';
  });
}

// ---------------------------------------------------- "Pegando" e Salvando o LocalStorage o desenho nos pixels--------------//

function pegandoPixel() {
  const desenho = document.getElementsByClassName('pixel');
  const pegaCor = JSON.parse(localStorage.getItem('pixelBoard'));
  console.log(pegaCor);
  if (pegaCor === null) {
    for (let index = 0; index < desenho.length; index += 1) {
      salveDesenho.push(desenho[index].style.backgroundColor);
      console.log(desenho[index].style.backgroundColor);
    }
    localStorage.setItem('pixelBoard', JSON.stringify(salveDesenho));
    salveDesenho = [];
  } else {
    for (let index2 = 0; index2 < desenho.length; index2 += 1) {
      desenho[index2].style.backgroundColor = pegaCor[index2];
    }
    console.log(pegaCor);
  }
}
function salvandoPixel() {
  const salvaDesenho = document.getElementsByClassName('pixel');
  for (let index = 0; index < salvaDesenho.length; index += 1) {
    salveDesenho.push(salvaDesenho[index].style.backgroundColor);
    console.log(salvaDesenho[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(salveDesenho));
}

// Lembrando que a "salvandoPixel" foi declarada dentro onde tem os clicks de alteração de cores dentro dos pixels, assim,  captura e  salva no localStorage -----------
// Chamamento de funções:
estilo();
pintarBu();
salvarBu();
removSele();
createButton();
chamaEvento();
storgeI();
putColor();
pegandoPixel();
// /*Referencias usadas:
// https://docs.ctjs.rocks/pt_BR/localstorage.html;
// https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#:~:text=Description-,JSON.parse(),object%20before%20it%20is%20returned.
// https://www.w3schools.com/jsref/jsref_foreach.asp
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
// Ajuda no zoom do Ayllan Summer, Monitoria foi de grande valia.
