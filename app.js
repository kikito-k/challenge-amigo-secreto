let amigos = [];

//Captura o texto inserido pelo usuário
function adicionarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nomeAmigo = inputAmigo.value; //Valida a entrada do nome
  console.log(nomeAmigo);

  //Verifica se o campo está vazio
  if (!nomeAmigo) {
    alert("Por favor insira um nome");
    return;
  }
  amigos.push(nomeAmigo); //Adiciona amigos ao array
  inputAmigo.value = ""; //Limpa o campo de nomes após adicionar um amigo
  inputAmigo.focus(); //Mantém o cursor habilitado para digitação

  atualizarLista();
  limparGanhador();
}

//Percorre o array amigos e adiciona cada nome como um elemento <li> dentro de uma lista HTML.
function atualizarLista() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = ""; //Limpa a lista antes de add novos nomes

  //Percorre o array em loop e cria elementos de lista <li> para cada nome.
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i]; //Para cada amigo, cria novo elemento de lista.
    listaAmigos.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    //verificar se o array amigos não está vazio.
    alert("Nenhum amigo adicionado");
    return;
  }
  //Math.random() e Math.floor() para selecionar um índice aleatório do array.
  let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado"); //Acessa o nome correspondente no array.
  resultado.innerHTML = `O amigo sorteado foi: ${sorteado}`; //Mostrar o resultado
  amigos = [];
  atualizarLista();
}
function limparGanhador() {
  document.getElementById("resultado").innerHTML = "";
}
