let totalGeral;
limpar();

function adicionar() {
    //Recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0]; //Separar o que vem antes no texto do html
    let valorUnitario = produto.split('R$')[1]; //Separar o que vem depois no texto no html
    let quantidade = document.getElementById('quantidade').value;

    //Calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;

    //Adicionar no carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML +  `<section class="carrinho__produtos" id="lista-produtos"> 
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>` // Concatenando e adicionando os produtos ao invés de limpar

    //Atualizar o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 0; // Resgatando o valor novamente apra zerar

}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = `R$ 0`;
}

