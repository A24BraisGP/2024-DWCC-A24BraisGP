<script>
import CustomInput from './components/CustomInput.vue';

export default {
	data() {
		return {
			opcionPulsada: '',
		};
	},
	components: {
		CustomInput,
	},
};
</script>

<template>
	<form action="">
		<CustomInput v-model:opcion-pulsada="opcionPulsada"></CustomInput>
		<div class="grid place-items-center">
			<button type="button" class="btn btn-primary">Enviar</button>
		</div>
	</form>

	<div class="grid place-items-center">
		<p class="text-white text-2xl">Vostede pulsou: {{ opcionPulsada }}</p>
	</div>
</template>
<style></style>
