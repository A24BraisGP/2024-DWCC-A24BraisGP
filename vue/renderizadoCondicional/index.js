'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			tarefas: [],
			nomeTarefa: '',
		};
	},
	computed: {
		tarefaCount() {
			return this.tarefas.length;
		},
	},
	methods: {
		crearTarefa(event) {
			this.tarefas.push(this.nomeTarefa);
		},
	},
}).mount('#app');
