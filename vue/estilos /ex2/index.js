'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			isActive: true,
		};
	},
	computed: {
		celda1() {
			return this.isActive ? 'active' : '';
		},
		celda2() {
			return !this.isActive ? 'active' : '';
		},
	},
	methods: {
		activar(event) {
			this.isActive = !this.isActive;
		},
	},
}).mount('#app');
