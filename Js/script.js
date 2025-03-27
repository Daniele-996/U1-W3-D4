const createTab = [];
const main = document.querySelector("main");

for (let i = 0; i < 90; i++) {
  createTab.push([]);
  //console.log(createTab);

  const createDivTab = document.createElement("div");
  createDivTab.classList.add("selectDiv");

  const createH3DivTab = document.createElement("h3");
  createH3DivTab.innerText = i + 1;

  main.appendChild(createDivTab);
  createDivTab.appendChild(createH3DivTab);
}

const buttonClick = document.querySelector("button");
buttonClick.onclick = function (event) {
  const randomNumb = Math.floor(Math.random() * 90) + 1;
  const divSelect = document.querySelectorAll("div");
};

const createCard = [];
const section = document.querySelector("section");

for (let i = 0; i < 24; i++) {
  const createSecCart = document.createElement("div");
  createSecCart.classList.add("selectCart");

  const createH3DivTab = document.createElement("h3");
  createH3DivTab.innerText = i + 1;

  main.appendChild(createDivTab);
  createDivTab.appendChild(createH3DivTab);
}
