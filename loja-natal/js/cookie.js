window.onload = detectarExistencia;

function detectarExistencia () {
	document.getElementsByTagName("button")[0].style.display = "block";

	if (document.cookie.length != 0) {
		let produto = document.querySelector("main").id;

			str = document.cookie.split('; ');
			var resultado = {};
			for (var i = 0; i < str.length; i++) {
				var cur = str[i].split('=');
				resultado[cur[0]] = cur[1];
			}
			elementos = cur[1].split("/");
			elementos.pop();
		

		for (i = 0; i < (elementos.length + 1); i++) {
			if (elementos[i] == produto) {
				document.getElementsByTagName("button")[0].style.display = "none";
				document.getElementsByClassName("informacoesProduto")[0].insertAdjacentHTML("beforeend", "<p class='aviso'>Este produto já existe em seu carrinho!</p>");
			}
		}
	}

	quant();
}
	

function criarCookie (produto) {
	if (document.cookie.length == 0) {
		document.cookie = "carrinho="+produto+"/; path=/";

		document.getElementsByClassName("botao")[0].style.display = "none";

		msg();
	} else {
		str = document.cookie.split('; ');
		var resultado = {};
		var elementos = [];
		for (var i = 0; i < str.length; i++) {
			var cur = str[i].split('=');
			resultado[cur[0]] = cur[1];
		}
		elementos = cur[1].split("/");
		elementos.pop();

		console.log(cur[1]);
		console.log(elementos);

		document.cookie = "carrinho="+Object.values(resultado)+produto+"/; path=/";
		document.getElementsByTagName("button")[0].style.display = "none";
		msg();
	}

	quant();
}

function msg () {
	if (document.getElementsByClassName("aviso").length == 0) {
		document.getElementsByClassName("informacoesProduto")[0].insertAdjacentHTML("beforeend", "<p class='aviso'>Produto foi adicionado ao carrinho!</p>");
	}
}

function quant () {
	str = document.cookie.split('; ');
	for (var i = 0; i < str.length; i++) {
		var cur = str[i].split('=');
	}
	let elementos = cur[1].split("/");
	elementos.pop();

	document.getElementsByClassName("quantidade")[0].innerHTML = elementos.length;
}