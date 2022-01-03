window.onload = produtos;

function produtos() {
	quant();

	str = document.cookie.split('; ');
	var resultado = {};
	for (var i = 0; i < str.length; i++) {
		var cur = str[i].split('=');
		resultado[cur[0]] = cur[1];
	}
	let elementos = cur[1].split("/");
	elementos.pop();


	for (i = 0; i < elementos.length; i++) {

		let produto = elementos[i];
		let conteudo = document.getElementById("prod"+produto);

		document.getElementById("compras").innerHTML += conteudo.outerHTML;
		document.getElementById("produtos").removeChild(conteudo);
	}

	if (document.getElementById("compras").children.length == 1) {
		document.getElementById("nenhumProduto").style.display = "block";
	} else if (document.getElementById("compras").children.length > 1) {
		document.getElementById("nenhumProduto").style.display = "none";
	}

	preco();
}
	
function preco() {
	let total = 0;
	let numElementos = document.getElementById("compras").children.length;
	
	for (i = 1; i < numElementos; i++) {
		total += parseInt(document.getElementById("compras").children[i].getElementsByClassName("preço")[0].innerHTML);
	}

	document.getElementById("total").innerHTML = total;
}

async function quant () {
	str = document.cookie.split('; ');
	for (var i = 0; i < str.length; i++) {
		var cur = str[i].split('=');
	}
	let elementos = cur[1].split("/");
	elementos.pop();

	document.getElementsByClassName("quantidade")[0].innerHTML = elementos.length;
}

function excluir (id) {
	str = document.cookie.split('; ');
	var resultado = {};
	for (var i = 0; i < str.length; i++) {
		var cur = str[i].split('=');
		resultado[cur[0]] = cur[1];
	}
	let elementos = cur[1].split("/");
	elementos.pop();

	for (i = 0; i < elementos.length; i++) {
		if (elementos[i] == id.id.slice(4)) {
			elementos.splice(i, 1);
			if (elementos.length != 0) {
				document.cookie = "carrinho="+elementos.join("/")+"/;path=/;";
			} else {
				document.cookie = "carrinho=;path=/;";
			}
		}
	}

	document.getElementById("compras").removeChild(id);

	if (document.getElementById("compras").children.length < 2) {
		document.getElementById("nenhumProduto").style = "block";
	}

	preco();
	quant();
}