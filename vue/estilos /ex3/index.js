'use strict';
const { createApp } = Vue;

createApp({
	data() {
		return {
			claseA: false,
			claseB: false,
			paragraphText: '',
			visible: true,
			colorWritten: '',
		};
	},
	computed: {
		classObj() {
			return {
				claseA: this.claseA ? 'claseA' : '',
				claseB: this.claseB ? 'claseB' : '',
			};
		},
		visibility() {
			return this.visible ? 'visible' : 'hidden';
		},
		colorObj() {
			return {
				color: this.colorWritten,
			};
		},
	},
	methods: {
		checkText(event) {
			let input = event.target.value;
			console.log(input);
			this.paragraphText = input;
			this.colorWritten = input;
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
		changeVisibility() {
			return (this.visible = !this.visible);
		},
	},
}).mount('#app');
