'use strict';
const { createApp } = Vue;

createApp({
	data() {
		return {
			claseA: false,
			claseB: false,
			paragraphText: '',
		};
	},
	computed: {
		classObj() {
			return {
				claseA: this.claseA ? 'claseA' : '',
				claseB: this.claseB ? 'claseB' : '',
			};
		},
	},
	methods: {
		checkText(event) {
			let input = event.target.value;
			console.log(input);
			this.paragraphText = input;

			if (input === 'claseA') {
				console.log('cjeacl');

				this.claseA = true;
				return;
			} else if (input === 'claseB') {
				console.log('checkb');

				this.claseB = true;
				return;
			} else {
				this.claseA = false;
				this.claseB = false;
			}
		},
	},
}).mount('#app');
