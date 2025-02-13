'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			textInput: '',
			commentArea: '',
			checked: [],
			radio: '',
			selected: '',
			number: 0,
		};
	},
	methods: {
		print() {
			console.log(this.extInput);
			console.log(this.commentArea);

			console.log(this.checked);
			console.log(typeof this.radio);
			console.log(this.selected);
		},
		resetValue() {
			this.textInput = '';
			this.commentArea = '';
			this.number = 0;
			this.checked = [];
			this.radio = '';
		},
	},
}).mount('#app');
