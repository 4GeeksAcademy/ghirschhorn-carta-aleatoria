import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  // Palos
  const palos = [`♠`, `♣`, `♥`, `♦`];
  const paloIndex = Math.floor(Math.random() * palos.length);
  const paloResultado = palos[paloIndex];

  const palosTexto = {
    '♠': 'picas',
    '♣': 'trebol',
    '♥': 'corazon',
    '♦': 'diamante'
  };

  const paloEstilo = palosTexto[paloResultado];

  // Número carta
  const numCard = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const numIndex = Math.floor(Math.random() * numCard.length);
  const numResultado = numCard[numIndex];

  // Carta
  function addElement(paloResultado, paloEstilo, numResultado) {
    const cartaDiv = document.createElement("div");
    cartaDiv.classList.add("card");
    cartaDiv.classList.add(paloEstilo);

    const topDiv = document.createElement("div");
    topDiv.classList.add("top");
    topDiv.textContent = paloResultado;

    const numDiv = document.createElement("div");
    numDiv.classList.add("numero");
    numDiv.textContent = numResultado;

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("bottom");
    bottomDiv.textContent = paloResultado;

    cartaDiv.appendChild(topDiv);
    cartaDiv.appendChild(numDiv);
    cartaDiv.appendChild(bottomDiv);

    document.querySelector('#card-container').appendChild(cartaDiv);
  }

  addElement(paloResultado, paloEstilo, numResultado);

  function generarCarta() {
    const paloIndex = Math.floor(Math.random() * palos.length);
    const paloResultado = palos[paloIndex];
    const paloEstilo = palosTexto[paloResultado];

    const numIndex = Math.floor(Math.random() * numCard.length);
    const numResultado = numCard[numIndex];

    addElement(paloResultado, paloEstilo, numResultado);

  }

  // Botón
  const boton = document.querySelector('#button-generar');
  boton.addEventListener('click', () => {
    document.querySelector('#card-container').innerHTML = '';
    generarCarta();
  });

};
