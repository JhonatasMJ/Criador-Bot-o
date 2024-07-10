const form = document.getElementById("controles");
const codigo = document.querySelector(".css");
const btn = document.querySelector(".btn");
const copiar = document.querySelector(".copiar");
form.addEventListener("change", verificarMudanca);

const estilos = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    //Criando um objeto para cada estilo
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  padding(value) {
    this.element.style.padding = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
  fontWeight(value) {
    this.element.style.fontWeight = value;
  },
};

function verificarMudanca(event) {
  const name = event.target.name; //Pegar o nome do evento que estou mudando
  const value = event.target.value; //Pegando valor do evento
  estilos[name](value); //Pegando o objeto e atribuindo valor
  mostrarCss();
}

function mostrarCss() {
  codigo.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</ span><span>"); //Retorna o codigo do css já formatado
  codigo.classList.add("ativo");
  copiar.classList.add("ativo");
}

//Copiar Código
copiar.addEventListener("click", () => {
  const codigoTexto = codigo.innerText;
  navigator.clipboard
    .writeText(codigoTexto)
    .then(() => {
      alert("Código copiado para a área de transferência!");
    })
    .catch((err) => {
      console.error("Erro ao copiar o código: ", err);
    });
});
