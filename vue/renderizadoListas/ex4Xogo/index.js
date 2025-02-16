'use strict';

const { createApp } = Vue;

createApp({
	data() {
		return {
			player: {
				life: 100,
			},
			monster: {
				life: 100,
			},
			MAXLIFE: 100,
			MINLIFE: 0,
			turnCount: 0,
			specialActive: false,
			victor: '',
			gameEnded: false,
			logs: [{}],
		};
	},
	computed: {
		playerLife() {
			return this.player.life + '%';
		},
		monsterLife() {
			return this.monster.life + '%';
		},
		isSpecialActive() {
			return !this.gameEnded ? !this.specialActive : '';
		},
		isGameEnded() {
			return this.gameEnded;
		},
	},
	methods: {
		//TODO preguntar por que non se inicializa adecuadamente o this.victor
		initializeGame() {
			this.victor = '';
			this.player.life = this.MAXLIFE;
			this.monster.life = this.MAXLIFE;
			this.turnCount = 0;
			this.specialActive = false;
			this.gameEnded = false;
			this.logs = [{}];
		},
		monsterAttack() {
			let monsterAttack = Math.floor(Math.random() * (15 - 8) + 8);
			this.player.life -= monsterAttack;
			this.logs.push({
				user: 'Monstro',
				logClass: 'log--monster',
				pointClass: 'log--damage',
				action: 'ataca con',
				points: monsterAttack,
			});
		},
		normalAttack() {
			let playerAttack = Math.floor(Math.random() * (12 - 5) + 5);
			let monsterDamage = this.monsterAttack();
			this.monster.life -= playerAttack;
			let logPlayer = `Vostede ataca con ${playerAttack}`;
			this.logs.push({
				user: 'Vostede',
				logClass: 'log--player',
				pointClass: 'log--damage',
				action: 'ataca con',
				points: playerAttack,
			});
		},
		specialAttack() {
			let playerAttack = Math.floor(Math.random() * (25 - 10) + 10);
			this.monster.life -= playerAttack;
			let monsterDamage = this.monsterAttack();
			this.turnCount = 0;
			this.specialActive = false;
			this.logs.push({
				user: 'Vostede',
				logClass: 'log--player',
				pointClass: 'log--damage',
				action: 'ataca con',
				points: playerAttack,
			});
		},
		healing() {
			let healingPoints = Math.floor(Math.random() * (20 - 8) + 8);
			if ((this.player.life += healingPoints >= this.MAXLIFE)) {
				this.player.life = this.MAXLIFE;
			} else {
				this.player.life += healingPoints;
			}
			let monsterDamage = this.monsterAttack();
			this.logs.push({
				user: 'Vostede',
				logClass: 'log--player',
				pointClass: 'log--heal',
				action: 'recupera',
				points: healingPoints,
			});
		},
		checkStatus() {
			if (
				this.player.life >= this.MAXLIFE ||
				this.player.life <= this.MINLIFE
			) {
				this.victor = 'monster';
				this.gameEnded = true;
				return;
			}
			if (this.monster.life <= this.MINLIFE) {
				this.victor = 'player';
				this.gameEnded = true;

				return;
			}
			if (
				this.monster.life <= this.MINLIFE &&
				this.player.life <= this.MINLIFE
			) {
				this.victor = 'draw';

				this.gameEnded = true;

				return;
			}
		},
		playerGiveUp() {
			this.gameEnded = true;
			this.victor = 'monster';
			//rompe polo problema coa inicialización de victor
			//	this.player.life = this.MINLIFE + 1;
		},
	},
	watch: {
		'player.life': function (newLife, oldLife) {
			if (newLife >= this.MAXLIFE || newLife <= this.MINLIFE) {
				this.checkStatus();
				return;
			}
		},
		'monster.life': function (newLife, oldLife) {
			if (newLife <= this.MINLIFE) {
				this.checkStatus();
				return;
			}
		},
		turnCount() {
			this.specialActive == true ? (this.turnCount = 0) : '';
			console.log(this.turnCount + ' turncounit');

			this.turnCount == 3 ? (this.specialActive = true) : '';
			console.log(this.turnCount);
		},
	},
}).mount('#game');
