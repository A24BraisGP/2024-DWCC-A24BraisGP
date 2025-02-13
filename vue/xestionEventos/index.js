'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			paragraphText: '',
		};
	},
	methods: {
		showText(event) {
			let input = event.target;
			this.paragraphText = input.value;
		},
	},
}).mount('#text');
