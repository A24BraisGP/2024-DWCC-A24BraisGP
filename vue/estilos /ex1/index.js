'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			red: true,
			green: true,
		};
	},
	computed: {
		secondP() {
			return this.green ? 'green' : 'red';
		},
	},
	methods: {
		alternarClasesFirstP(event) {
			this.red = !this.red;
		},
		alternarClasesSecondP() {
			this.green = !this.green;
		},
	},
}).mount('#app');
