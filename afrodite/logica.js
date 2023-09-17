//quando for pra outra página:

//código de inicialização quando  abrir a página do carrinho

//1) carregar a lista de IDs da sessão
var carrinho = sessionStorage.getItem('carrinho');
//2) pedir ao backend a lista de todos os produtos
// chamada ajax
var acao = $.ajax({
  url: rota,
  dataType: 'json', // os dados são recebidos no formato json,
});

// se a chamada der certo
acao.done(function (dados) {
  if (dados.resultado == 'ok') {
      // percorrer a lista de resultados
      for (var p of dados.detalhes) {
          // acrescentar informações da pessoa em uma string
          var lin = '==> ' + p.nome + ', x:' +
              p.x + '|y:' + p.y + '</br>';
          // adiciona a string criada na div
          $('#listagem').append(lin);
      }
  } else {
      alert("ERRO");
  }
});

// se a chamada der erro
acao.fail(function () {
  alert("Ocorreu algum erro na chamada ajax");
});
//3) fazer uma quebra da lista de IDS usando split (",") => partes = carrinho.split(",");
var partes = carrinho.split(',');

//4) percorrer a lista de IDs  (for em "partes"):

 // percorrer a lista de IDS que está na sessão; aqui já é um vetor, pois usou o split em cima; exemplo: [1, 1, 5] = produto de id 1 duas vezes, produto de id 5 (três produtos)
  for (var id_for of partes) {

  //3.1) para cada ID da lista, encontrar o produto na lista de produtos que recebeu do backend, e aí exibir esse produto na página

        // percorrer todos os produtos que vieram do backend
        for (var p of dados.detalhes) {

	  // o produto atual é igual ao produto que eu estou querendo mostrar?
           if (p.id == id_for) {

            // monta a linha que vai mostrar o produto ***********************************************
            var lin = '<div class="produto"> <img id="imagem" src=imgs/' + p.nome_arquivo_foto + ' title="foto carrinho"> <div class="info"> <p> VESTIDO COM BOLINHAS </p><p> SITUAÇAO: SEMINOVO </p><p> VERDE </p><label class="checkbox"><input type="checkbox" id="checkbox" value=""></label></div></div><br>';

            var lin = '<div> ' + p.nome_produto + '</div>'; // primeiro teste pode ser assim, só pra ver se está buscando do banco de dados

            // adiciona a linha na div maior que abriga todas as linhas
            $('#listagem').append(lin);

            // interrompe a busca porque já achou o produto
            break;

        }}// fim do for pequeno

   } // fim do for grande
  
  
      
