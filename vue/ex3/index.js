'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			textToShow: 'You pressed the button! ',
			paragraphText: '',
			paragraphTextEnter: '',
		};
	},
	methods: {
		showText() {
			console.log(this.textToShow);
		},
		textParagraph(event) {
			let input = event.target;
			this.paragraphText = input.value;
		},
		textParagraphEnter(event) {
			let input = event.target;
			this.paragraphTextEnter = input.value;
			input.value = '';
		},
	},
}).mount('#app');
