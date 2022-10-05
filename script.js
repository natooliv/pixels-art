let salveLocal = [];

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

// function boardUser() {
//   const board = document.getElementById('pixel-board');
//   const input = document.getElementById('board-size');
//   let inputValue = input.value;
//   if (inputValue < 5) {
//     inputValue = 5;
//   } else if (inputValue > 40) {
//     inputValue = 40;
//   } else {
//     inputValue = input.value;
//   }
//   board.style.height = inputValue * 40 + 'px';
//   board.style.width = inputValue * 40 + 'px';
//   const matriz = inputValue ** 2;
//   for (let index = 0; index < matriz; index += 1) {
//     const divs = document.createElement('div');
//     divs.classList.add('pixel');
//     board.appendChild(divs);
//   }
// }
// boardUser();

// function quadrados() {
//   for (let i = 1; i <= 25; i += 1) {
//     const pixels = document.querySelector('#pixel-board');
//     const newDiv = document.createElement('div');
//     newDiv.classList.add('pixel');
//     pixels.appendChild(newDiv);
//     pixels.style.width = '200px';
//     pixels.style.height = '200px';
//   }
// }
// quadrados();
