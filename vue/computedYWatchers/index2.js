'use strict';
const { createApp } = Vue;

createApp({
	data() {
		return {
			km: 0,
			metro: 0,
		};
	},
	watch: {
		km(newKm, oldKm) {
			let mInput = document.getElementById('mInput');
			this.metro = newKm * 1000;
			mInput.value = this.metro;
			this.km = newKm;
		},
		metro(newM, oldM) {
			let kmInput = document.getElementById('kmInput');
			this.km = newM / 1000;
			kmInput.value = this.km;
			this.metro = newM;
		},
	},
}).mount('#app');
