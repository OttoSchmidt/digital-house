window.onload = carregando;
window.onscroll = treno;

function carregando () {
	hora ();
	quant ();
}

async function hora () {
	let milisegundos = Date.now();
	let natal = 1640390400000;

	let milisegundosRestantes = natal - milisegundos;
	let diasRestantes = Math.trunc((milisegundosRestantes / 86400000)+1);

    if (diasRestantes == 0) {
      document.getElementById("horario").innerHTML = "É natal!";
    } else if (diasRestantes == 1) {
      document.getElementById("horario").innerHTML = "Falta 1 dia para o natal!";
    } else {
      document.getElementById("horario").innerHTML = "Faltam " + diasRestantes + " dias para o natal!";
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

async function treno () {
	let ativo = false;
	if (document.documentElement.scrollTop > 1050) {
		ativo = true;
	}

	if (ativo) {
		document.getElementById("treno").style.left = "10vw";
	}
}

function rodar (direcao) {
  let selecionado = document.getElementsByClassName("circSelecionado")[0].getAttribute("id");
  let selecionadoNum = parseInt(selecionado.substr(selecionado.length - 1));

  document.getElementById("rolagem"+selecionadoNum).style.display = "none";

  if (direcao == "dir") {
      selecionadoNum += 1;
  } else if (direcao == "esq") {
      selecionadoNum -= 1;
  }

  if (selecionadoNum == 1) {
	  document.getElementById("esquerda").style.display = "none";
  } else if (selecionadoNum == 2) {
	  document.getElementById("esquerda").style.display = "block";
	  document.getElementById("direita").style.display = "block";
  } else if (selecionadoNum == 3) {
	  document.getElementById("direita").style.display = "none";
  }

  document.getElementsByClassName("circSelecionado")[0].setAttribute("class", "circ");
  document.getElementById("pag"+selecionadoNum).setAttribute("class", "circ circSelecionado");

  document.getElementById("rolagem"+selecionadoNum).style.display = "grid";
}