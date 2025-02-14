'use strict';

const { createApp } = Vue;

let id = 0;

createApp({
	data() {
		return {
			montanas: [],
			newMontanaName: '',
			newMontanaAltitude: 0,
			visible: true,
		};
	},
	computed: {
		textoBoton() {
			return this.visible ? 'Ocultar lista' : 'Mostrar Lista';
		},
	},
	methods: {
		addMontana(event) {
			if (this.newMontanaName === '') {
				return;
			} else {
				this.montanas.push({
					id: id++,
					name: this.newMontanaName,
					altitude: this.newMontanaAltitude,
				});
				this.newMontanaAltitude = 0;
				this.newMontanaName = '';
			}
		},
		deleteMontana(montanaToDelete) {
			console.log(this.montanas.filter((el) => el !== montanaToDelete));

			this.montanas = this.montanas.filter(
				(el) => el !== montanaToDelete
			);
		},
		visibleNot() {
			return (this.visible = !this.visible);
		},
	},
}).mount('#app');
