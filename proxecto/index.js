// 1. Imaxina que tes que crear unha páxina web básica para realizar pedidos (do que
// queiras).

// Como simulación da base de datos, crea un ficheiro JSON para almacenar a
// información dos clientes e pedidos (simularían a táboa clientes e a táboa pedidos). Dos clientes vaise gardar o número de teléfono, o enderezo e o pedido típico, que será unha descrición corta. Dos pedidos gardarase a información do teléfono do cliente e a descrición do pedido.

// Crea un formulario onde apareza unha caixa de texto para introducir o teléfono e un botón, de tal forma que ao pulsar o botón aparezan os datos do cliente asociados ao teléfono (pedido e enderezo). Ademais, cando aparezan os datos do cliente tamén se mostrará un novo formulario con unha caixa de texto que conteña a descrición do pedido típico do cliente e un botón “Realizar pedido”. O cliente poderá modificar a descrición do pedido e confirmará o pedido pulsando o botón “Realizar pedido”. Isto fará que os datos do novo pedido se garden no ficheiro JSON.

let inputTlf = document.querySelector('input');
let botonBusqueda = document.querySelector('button');
let ulDatosCliente = document.getElementById('datosCliente');
let ulEnderezo = document.getElementById('enderezo');
let textPedido = document.getElementById('pedido');
let botonRealizarPedido = document.getElementById('realizarPedido');

let telefonoCliente = 0;

botonBusqueda.addEventListener('click', mostrarCliente);
botonRealizarPedido.addEventListener('click', realizarPedido);

function mostrarCliente(event) {
	event.preventDefault();
	telefonoCliente = inputTlf.value;
	getDatosCliente(telefonoCliente);
}

async function getDatosCliente(telefonoCliente) {
	try {
		let responseCliente = await fetch(
			`http://localhost:3000/clientes/?numeroTlf=${telefonoCliente}`
		);
		let responsePedido = await fetch(
			`http://localhost:3000/pedidos/?telefonoCliente=${telefonoCliente}`
		);
		let dataCliente = await responseCliente.json();
		let dataPedido = await responsePedido.json();
		renderCliente(dataCliente, dataPedido);
	} catch (error) {
		console.log('Erro : ' + error);
	}
}

function renderCliente(dataCliente, dataPedido) {
	dataCliente = dataCliente[0];
	console.log(dataCliente);
	console.log(dataPedido);
	let cidade = document.createElement('li');
	let pais = document.createElement('li');
	let rua = document.createElement('li');
	let nome = document.createElement('li');
	let numeroTlf = document.createElement('li');
	let enderezo = document.createElement('li');
	enderezo.innerText = 'Enderezo: ';
	cidade.innerText = `${dataCliente.enderezo.cidade}`;
	pais.innerText = `${dataCliente.enderezo.pais}`;
	rua.innerText = `${dataCliente.enderezo.rua}`;
	nome.innerText = `${dataCliente.nome}`;
	numeroTlf.innerText = `${dataCliente.numeroTlf}`;

	ulDatosCliente.prepend(nome, numeroTlf);
	ulEnderezo.append(enderezo, pais, cidade, rua);
	textPedido.classList.remove('oculto');
	botonRealizarPedido.classList.remove('oculto');
	for (const pedido of dataPedido) {
		textPedido.value += `${pedido.descripcion} - `;
	}
}

function realizarPedido(event) {
	event.preventDefault();
	let pedidoValue = textPedido.value;
	postPedido(pedidoValue, telefonoCliente);
}

async function postPedido(pedidoValue, telefonoCliente) {
	const post = { descripcion: pedidoValue, telefonoCliente: telefonoCliente };
	try {
		let response = await fetch('http://localhost:3000/pedidos', {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-type': 'application/json;charset=utf-8',
			},
		});

		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log('Erro · ' + error);
	}
}
