'use strict';
let divUser = document.getElementById('dataUser');
let divLocation = document.getElementById('dataLocation');
let divImgUser = document.getElementById('imgUser');

function showUser(dataUser) {
	actualizarUserData(dataUser.results[0]);
	actualizarUserLocation(dataUser.results[0].location);
	actualizarUserPicture(dataUser.results[0].picture);
}

function vaciarElementos() {
	let pUser = document.querySelector('p[data-type=user]');
	divUser.removeChild(pUser);

	let pLocation = document.querySelector('p[data-type=location]');
	divLocation.removeChild(pLocation);
	let imgOldUser = document.querySelector('img');
	divImgUser.removeChild(imgOldUser);
}

function actualizarUserData(data) {
	let gender = data.gender;
	let title = data.name.title;
	let first = data.name.first;
	let last = data.name.last;
	let email = data.email;
	let age = data.dob.age;
	let birthDate = data.dob.date.slice(0, 10);
	let registeredDate = data.registered.date.slice(0, 10);
	let ageRegistered = data.registered.age;
	let nationality = data.nat;
	let cell = data.cell;
	let p = document.createElement('p');
	p.dataset.type = 'user';
	p.innerText = `${title} ${first} ${last}
  Gender : ${gender}
  Email: ${email} 
  Phone Number: ${cell}
  Age: ${age} 
  BirthDate: ${birthDate}
  Registered at: ${registeredDate}
  Been registered for: ${ageRegistered} years
  Nationality: ${nationality}`;
	divUser.append(p);
}

function actualizarUserLocation(data) {
	let streetNumber = data.street.number;
	let streetName = data.street.name;
	let city = data.city;
	let state = data.state;
	let country = data.country;
	let postalCode = data.postcode;
	let timezone = data.timezone.offset;
	let p = document.createElement('p');
	p.dataset.type = 'location';
	p.innerText = `Adress: ${streetName} ${streetNumber}
  City: ${city}
  State: ${state}
  Country: ${country}
  Postal Code: ${postalCode}
  Timezone: ${timezone}`;
	divLocation.append(p);
}

function refreshFecth(event) {
	vaciarElementos();
	let newUserFecth = fetch('https://randomuser.me/api/');
	newUserFecth
		.then((response) => response.json())
		.then((data) => showUser(data));
}

function actualizarUserPicture(data) {
	let img = document.createElement('img');
	img.src = data.large;
	divImgUser.append(img);
}

let botonRecarga = document.getElementById('refrescar');
botonRecarga.addEventListener('click', refreshFecth);

let promUser = fetch('https://randomuser.me/api/');

promUser
	.then((response) => {
		if (!response.ok) {
			console.log('BAD BAD PETITION');
		} else return response.json();
	})
	.then((data) => showUser(data));
