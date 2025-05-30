const amigos = [];

const eAmigoInput = document.querySelector("#amigo");
const eAmigoList = document.querySelector("#listaAmigos");
const eAmigoResultado = document.querySelector("#resultado");

function adicionarAmigo() {
  const amigo = eAmigoInput.value.trim();

  if (!validarAmigo(amigo)) {
    return;
  }

  amigos.push(amigo);
  atualizarListaAmigos();
  eAmigoInput.value = "";
}

function validarAmigo(amigo) {
  console.log(amigo, amigo.length, amigo.length <= 3);

  if (amigo.length < 3) {
    window.alert("O nome do amigo deve ter pelo menos 3 caracteres");
    return false;
  }

  if (amigos.includes(amigo)) {
    window.alert("Amigo já adicionado");
    return false;
  }

  return true;
}

function atualizarListaAmigos() {
  eAmigoList.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    eAmigoList.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    window.alert("Adicione ao menos um amigo antes de sortear.");
    return;
  }

  const randIndex = Math.floor(Math.random() * amigos.length);
  const resultadoAmigo = amigos[randIndex];
  const resultadoMessage = `Parabéns, o sorteado foi ${resultadoAmigo}`;

  eAmigoResultado.textContent = resultadoMessage;
}
