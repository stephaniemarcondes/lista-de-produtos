let section = document.querySelector(".containerVitrine");
let container = document.querySelector(".containerListaProdutos");
let ul = document.querySelector("ul");
section.appendChild(container);
container.appendChild(ul);
let arrayCarrinho = [];

function listarProdutos(produtos) {
  ul.innerHTML = "";
  let soma = 0;
  let valorTotal = document.querySelector(".valorTotal");

  for (let i = 0; i < produtos.length; i++) {
    let produtosItens = produtos[i];

    let card = criarCard(produtosItens);

    ul.append(card);

    soma += parseInt(produtos[i].preco);
  }
  //soma do total dos produtos da secao
  valorTotal.innerText = `R$ ${parseInt(soma)}`;
}
console.log(listarProdutos(produtos));

//criando card
function criarCard(produtosItens) {
  let nome = produtosItens.nome;
  let secao = produtosItens.secao;
  let categoria = produtosItens.categoria;
  let preco = produtosItens.preco;
  let img = produtosItens.img;

  let divOrganizarlista = document.createElement("div");
  divOrganizarlista.classList.add("divOrganizarlista");

  let li = document.createElement("li");
  let nomeProduto = document.createElement("h2");

  nomeProduto.classList.add("nomeProduto");
  let nomeSecao = document.createElement("h5");

  nomeSecao.classList.add("nomeSecao");
  let nomeCategoria = document.createElement("h5");

  let nomePreco = document.createElement("h3");
  let divPrecoBotao = document.createElement("div");

  divPrecoBotao.classList.add("divPrecoBotao");
  nomePreco.classList.add("nomePreco");

  let imgProduto = document.createElement("img");
  imgProduto.classList.add("imgProduto");

  let buttonComprar = document.createElement("button");
  buttonComprar.classList.add("buttonComprar");
  buttonComprar.id = produtosItens.id;

  let ulComponentes = document.createElement("ul");
  ulComponentes.classList.add("ulComponentes");

  //separando componentes para criar lista

  produtosItens.componentes.forEach((elem) => {
    let liProdutoItemForEach = document.createElement("li");
    liProdutoItemForEach.innerText = elem;
    liProdutoItemForEach.classList.add("componentes");
    ulComponentes.appendChild(liProdutoItemForEach);
  });

  nomeProduto.innerText = produtosItens.nome;
  nomeSecao.innerText = produtosItens.secao;
  nomePreco.innerText = `R$ ${produtosItens.preco}`;
  imgProduto.src = produtosItens.img;
  buttonComprar.innerText = "Comprar";

  divOrganizarlista.appendChild(li);
  li.appendChild(imgProduto);
  li.appendChild(nomeProduto);
  li.appendChild(nomeSecao);
  li.appendChild(nomeCategoria);
  li.appendChild(divPrecoBotao);
  divPrecoBotao.appendChild(nomePreco);
  divPrecoBotao.appendChild(buttonComprar);
  li.appendChild(ulComponentes);

  //botao carrinho
  buttonComprar.addEventListener("click", () => {
    adicionarProdutosAoCarrinho(produtosItens);
  });

  return li;
}

//botões para aparecer em cada botão os produtos da seção
const botaoTodos = document.querySelector(".botaoTodos");

botaoTodos.addEventListener("click", () => {
  listarProdutos(produtos);
});

const botaoHortifruti = document.querySelector(".botaoHortifruti");

botaoHortifruti.addEventListener("click", () => {
  listarProdutos(filtrarHortifruti(produtos));
});

const botaoPanificadora = document.querySelector(".botaoPanificadora");

botaoPanificadora.addEventListener("click", () => {
  listarProdutos(filtrarPanificadora(produtos));
});

const botaobotaoLaticinios = document.querySelector(".botaoLaticinios");

botaobotaoLaticinios.addEventListener("click", () => {
  listarProdutos(filtrarLaticinios(produtos));
});

//funções para fazer a filtragem pro botão funcionar
function filtrarHortifruti(produtos) {
  let aux = [];

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].secao == "Hortifruti") {
      aux.push(produtos[i]);
    }
  }
  return aux;
}

//funções para fazer a filtragem pro botão funcionar
function filtrarPanificadora(produtos) {
  let aux = [];
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].secao == "Panificadora") {
      aux.push(produtos[i]);
    }
  }
  return aux;
}

//funções para fazer a filtragem pro botão funcionar
function filtrarLaticinios(produtos) {
  let aux = [];
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].secao == "Laticinio") {
      aux.push(produtos[i]);
    }
  }
  return aux;
}

//parte da barra de pesquisa
let botaoBusca = document.querySelector(".botaoBusca");

botaoBusca.addEventListener("click", buscarPorNome);

function buscarPorNome(event) {
  let campoBuscaPorNome = document.querySelector(".campoBuscaPorNome");
  let termoDePesquisa = campoBuscaPorNome.value;
  let arrayFiltrado = produtos.filter((elemento) => {
    return (
      elemento.nome.toLowerCase() == termoDePesquisa.toLowerCase() ||
      elemento.categoria.toLowerCase() == termoDePesquisa.toLowerCase() ||
      elemento.secao.toLowerCase() == termoDePesquisa.toLowerCase()
    );
  });

  listarProdutos(arrayFiltrado);
}

//layout da parte superior do carrinho (não é dinamico)
function criarCarrinho() {
  let carrinho = document.querySelector(".carrinho");
  carrinho.classList.add("carrinho");
  carrinho.classList.add("organizar");
  let imgcarrinho = document.createElement("img");
  imgcarrinho.classList.add("imgcarrinho");
  let h3Carrinho = document.createElement("h3");
  h3Carrinho.classList.add("h3carrinho");

  imgcarrinho.src =
    "../entrega-lista-produtos-m2-sprint-1b-stephaniemarcondes/src/img/carrinho.png";
  h3Carrinho.innerText = "Carrinho";

  carrinho.appendChild(imgcarrinho);
  carrinho.appendChild(h3Carrinho);
}



function criarCarrinholayout(arrayCarrinho) {
  //pegando classe do html

  let carrinhodinamico = document.querySelector(".carrinhoDinamico");
  carrinhodinamico.innerHTML = "";
  arrayCarrinho.forEach((produto) => {
    //criando elementos
    let divLayoutProdutoCarrinho = document.createElement("div");
    divLayoutProdutoCarrinho.classList.add("divLayoutProdutoCarrinho");

    let divImgEQuadroProdutos = document.createElement("div");
    divImgEQuadroProdutos.classList.add("divImgEQuadroProdutos");

    let divQuadroProdutos = document.createElement("div");
    divQuadroProdutos.classList.add("divQuadroProdutos");

    let imgProdutoCarinho = document.createElement("img");
    imgProdutoCarinho.classList.add("imgProdutoCarinho");

    let divDescricaoProdutoCarrinho = document.createElement("div");
    divDescricaoProdutoCarrinho.classList.add("divDescricaoProdutoCarrinho");

    let nomeProdutoCarrinho = document.createElement("h3");
    nomeProdutoCarrinho.classList.add("nomeProdutoCarrinho");

    let secaoProdutoCarrinho = document.createElement("h4");
    secaoProdutoCarrinho.classList.add("secaoProdutoCarrinho");

    let precoProdutoCarrinho = document.createElement("h3");
    precoProdutoCarrinho.classList.add("precoProdutoCarrinho");

    let divLixeira = document.createElement("div");
    divLixeira.classList.add("divLixeira");

    let buttonLixeira = document.createElement("img");
    buttonLixeira.classList.add("divLixeira");
    buttonLixeira.id = produto.id;

    //dando nome aos bois
    imgProdutoCarinho.src = produto.img;
    nomeProdutoCarrinho.innerText = produto.nome;
    secaoProdutoCarrinho.innerText = produto.secao;
    precoProdutoCarrinho.innerText = produto.preco;
    buttonLixeira.src = "./src/img/trash.png";
    //dando os appends

    divDescricaoProdutoCarrinho.appendChild(nomeProdutoCarrinho);
    divDescricaoProdutoCarrinho.appendChild(secaoProdutoCarrinho);
    divDescricaoProdutoCarrinho.appendChild(precoProdutoCarrinho);
    divQuadroProdutos.appendChild(divDescricaoProdutoCarrinho);
    divImgEQuadroProdutos.appendChild(imgProdutoCarinho);
    divImgEQuadroProdutos.appendChild(divQuadroProdutos);
    divLayoutProdutoCarrinho.appendChild(divImgEQuadroProdutos);
    divLayoutProdutoCarrinho.appendChild(buttonLixeira);
    carrinhodinamico.appendChild(divLayoutProdutoCarrinho);

    buttonLixeira.addEventListener("click", () => {
      removerDoCarrinho(produto);
    });
  });
}

function adicionarProdutosAoCarrinho(produto) {
  arrayCarrinho.push(produto);
  criarCarrinholayout(arrayCarrinho);
  console.log(arrayCarrinho);
  ultimoCarrinho();
}

function removerDoCarrinho(produto) {
  let index = arrayCarrinho.indexOf(produto);
  arrayCarrinho = arrayCarrinho.filter((elem, i) => i !== index);
  criarCarrinholayout(arrayCarrinho);
  console.log(arrayCarrinho);
  ultimoCarrinho();
}

function ultimoCarrinho() {
  let carrinhoQtdadeETotal = document.querySelector(".carrinhoQtdadeETotal");
  carrinhoQtdadeETotal.innerHTML = "";
  let divTotal = document.createElement("div");
  divTotal.classList.add("divTotal");

  let quantidade = document.createElement("h2");
  quantidade.classList.add("quantidade");

  let totais = document.createElement("div");
  totais.classList.add("totais");

  let totalCarrinho = document.createElement("h2");
  totalCarrinho.classList.add("totalCarrinho");

  quantidade.innerText = `Quantidade: ${arrayCarrinho.length}`;
  totalCarrinho.innerText = `Total: `;

  let pcarrinho = document.createElement("p");
  pcarrinho.classList.add("pcarrinho");
  pcarrinho.innerText = `R$ ${arrayCarrinho.reduce(
    (acc, elem) => acc + parseInt(elem.preco),
    0
  )}`;

  carrinhoQtdadeETotal.appendChild(divTotal);
  divTotal.appendChild(quantidade);
  divTotal.appendChild(totais);
  totais.appendChild(totalCarrinho)
  totais.appendChild(pcarrinho);
}

function main() {
  listarProdutos(produtos);
  criarCarrinho();
}
main();
