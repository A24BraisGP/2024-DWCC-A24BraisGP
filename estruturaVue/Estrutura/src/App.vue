<script>
import FoodItem from './components/FoodItem.vue';
import ButtonUpper from './components/ButtonUpper.vue';
import ButtonExcl from './components/ButtonExcl.vue';
export default {
	data() {
		return {
			message: 'Ola mundo!',
			count: 0,
		};
	},
	methods: {
		incrementarContador() {
			this.count++;
		},
	},
	components: {
		FoodItem,
		ButtonUpper,
		ButtonExcl,
	},
};
</script>

<template>
	<h1>{{ message }}</h1>
	<button @click="incrementarContador">{{ count }}</button>
	<FoodItem />
	<ButtonUpper />
	<ButtonExcl></ButtonExcl>
</template>

<style></style>
