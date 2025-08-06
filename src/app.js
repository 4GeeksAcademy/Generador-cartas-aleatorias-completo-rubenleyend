import "bootstrap";
import "./style.css";

window.onload = function () {

  const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"];
  const palos = ["♦", "♥", "♠", "♣"];

  function elementoAleatorio(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
// devuelve un nodeList. obligado a iterar para que funcione
  const palosHTML = document.querySelectorAll(".palo");

  const numero = document.querySelector(".numero");

  const numeroAleatorio = elementoAleatorio(numeros);
  const paloAleatorio = elementoAleatorio(palos);

  numero.textContent = numeroAleatorio;

  palosHTML.forEach(p => {
    const tieneRotacion = p.classList.contains("rotated");
    p.textContent = paloAleatorio;
    p.className = "palo lh-1 ms-2";
    
    if (tieneRotacion) p.classList.add("rotated");

    if (paloAleatorio === "♦" || paloAleatorio === "♥") {
      p.classList.add(paloAleatorio);
    }
  });
};







