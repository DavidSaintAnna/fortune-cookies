const cookieImg = document.querySelector(".cookie-btn");
const btn = document.querySelector(".btn");
const menu = document.querySelector(".menu");
const menuAfterClick = document.querySelector(".menu-after-click");
const spn = document.querySelector(".spn-text");

const phrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Procure acender uma vela em vez de almadiçoar a escuridão.",
  "O aprendizado é como o horizonte: não há limites.",
  "O cão não ladra por valentia e sim por medo.",
  " Até as torres mais altas começam do chão. ",
  "Só o tempo e o esforço trazem a competência.",
  "Para cortar uma árvore bem rápido, gaste o dobro do tempo afiando o machado.",
];

document.body.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    menu.classList.add("hide");
    const randomNumber = Math.floor(Math.random() * phrases.length);
    const randomPhrase = phrases[randomNumber];
    spn.textContent = randomPhrase;
    menuAfterClick.classList.remove("hide");
  }
});

cookieImg.addEventListener("click", () => {
  menu.classList.add("hide");
  const randomNumber = Math.floor(Math.random() * phrases.length);
  const randomPhrase = phrases[randomNumber];
  spn.textContent = randomPhrase;
  menuAfterClick.classList.remove("hide");
});

btn.addEventListener("click", () => {
  menu.classList.remove("hide");
  menuAfterClick.classList.add("hide");
});
