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
			this.addLog(
				'Monstro',
				'log--monster',
				'log--damage',
				'ataca con',
				monsterAttack
			);
		},
		normalAttack() {
			let playerAttack = Math.floor(Math.random() * (12 - 5) + 5);
			this.monster.life -= playerAttack;
			this.monsterAttack();
			this.addLog(
				'Vostede',
				'log--player',
				'log--damage',
				'ataca con',
				playerAttack
			);
		},
		specialAttack() {
			let playerAttack = Math.floor(Math.random() * (25 - 10) + 10);
			this.monster.life -= playerAttack;
			this.monsterAttack();

			this.turnCount = 0;
			this.specialActive = false;
			this.addLog(
				'Vostede',
				'log--player',
				'log--damage',
				'ataca con',
				playerAttack
			);
		},
		healing() {
			let oldLife = this.player.life;
			let healingPoints = Math.floor(Math.random() * (20 - 8) + 8);
			if ((oldLife += healingPoints) >= this.MAXLIFE) {
				this.player.life = this.MAXLIFE;
			} else {
				this.player.life += healingPoints;
			}
			this.monsterAttack();

			this.addLog(
				'Vostede',
				'log--player',
				'log--heal',
				'recupera',
				healingPoints
			);
		},
		addLog(user, logClass, pointClass, action, points) {
			this.logs.push({
				user: user,
				logClass: logClass,
				pointClass: pointClass,
				action: action,
				points: points,
			});
		},
		checkStatus() {
			if (
				this.player.life >= this.MAXLIFE ||
				this.player.life <= this.MINLIFE
			) {
				this.victor = 'monster';
				this.player.life = this.MINLIFE;
				this.gameEnded = true;
				return;
			}
			if (this.monster.life <= this.MINLIFE) {
				this.victor = 'player';
				this.monster.life = this.MINLIFE;

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
			this.player.life = this.MINLIFE;
		},
	},
	watch: {
		'player.life': function (newLife, oldLife) {
			if (newLife <= this.MINLIFE) {
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
			this.turnCount == 3 ? (this.specialActive = true) : '';
		},
	},
}).mount('#game');
