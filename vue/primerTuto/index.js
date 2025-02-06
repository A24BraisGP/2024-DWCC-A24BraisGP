'use strict';
// desestruturación de obxectos equivalente a
// const createApp = Vue.createApp;

const { createApp } = Vue;
createApp({
	data() {
		return {
			message: `Ola mundo!`,
			boolean: true,
			numero: 22,
			array: ['a', 3333, 'be'],
			obxecto: {
				dataObx: 'dataObx',
				probaArr: ['w', 'w,', 'w,'],
			},
			html: '<b>Ola pero en negrita</b>',
			dynamicId: 1,
			atribute2: 2,
			count: 1,
		};
	},
	methods: {
		increment() {
			this.count++;
		},
	},
}).mount('#app');
