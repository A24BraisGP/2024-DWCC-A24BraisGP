'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			todoData: '',
			todoId: 1,
		};
	},
	methods: {
		async traerTodo() {
			this.todoData = null;
			await delay(1000);
			let response = await fetch(
				`https://jsonplaceholder.typicode.com/todos/${this.todoId}`
			);

			this.todoData = await response.json();
			this.todoId++;
		},
	},
	mounted() {
		this.traerTodo();
	},
}).mount('#app');

function delay(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
