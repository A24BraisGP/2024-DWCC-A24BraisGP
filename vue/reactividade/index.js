'use strict';
const { createApp } = Vue;

createApp({
	data() {
		return {
			nome: 'Brais',
			ano: new Date().getFullYear(),
			image: '<img src="ratonero_bodeguero.jpeg"/>',
			count: 0,
			imageSrc: 'ratonero_bodeguero.jpeg',
		};
	},
	methods: {
		increase() {
			this.count += 1000;
		},
		decrease() {
			this.count -= 750;
		},
	},
}).mount('#info');
