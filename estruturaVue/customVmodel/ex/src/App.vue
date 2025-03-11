<script>
import CustomInput from './components/CustomInput.vue';

export default {
	data() {
		return {
			opcionPulsada: '',
			result: '',
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
			<button
				type="button"
				class="btn btn-primary"
				@click.stop="result = this.opcionPulsada"
			>
				Enviar
			</button>
		</div>
	</form>

	<div class="grid place-items-center">
		<p class="text-white text-2xl">Vostede pulsou: {{ this.result }}</p>
	</div>
</template>
<style></style>
