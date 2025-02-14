'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			player: {
				life: 70,
			},
			monster: {
				life: 55,
			},
		};
	},
	computed: {
		playerLife() {
			return this.player.life;
		},
		monsterLife() {
			return this.monster.life;
		},
	},
	methods: {
		initialiteGame() {
			this.player.life = 100;
			this.monster.life = 100;
		},
	},
}).mount('#game');
