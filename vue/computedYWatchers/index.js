'use strict';
const { createApp } = Vue;

createApp({
	data() {
		return {
			num1: 0,
			num2: 0,
			result: 0,
		};
	},
	// Tamén se pode aplicar un computed para result e par tal que num1 + num2 etc
	computed: {
		par() {
			return this.result % 2 == 0 ? 'Es par' : 'Es impar';
		},
	},
	watch: {
		num1(newNum, oldNum) {
			this.num1 = newNum;
			this.result = this.num1 + this.num2;
		},
		num2(newNum, oldNum) {
			this.num2 = newNum;
			this.result = this.num1 + this.num2;
		},
	},
}).mount('#app');
