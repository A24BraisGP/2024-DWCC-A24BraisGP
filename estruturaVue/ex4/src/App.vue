<script>
import Info from '@/components/Info.vue';
import Form from '@/components/Form.vue';
export default {
	data() {
		return {
			nome: 'Brais García',
			anoNacemento: 1999,
		};
	},
	components: {
		Info,
		Form,
	},
	methods: {
		actualizarNome(newName) {
			this.nome = newName;
		},
		actualizarAno(newAno) {
			this.anoNacemento = newAno;
		},
	},
};
</script>

<template>
	<Form
		:nome="nome"
		:anoNacemento="anoNacemento"
		@cambiar-ano="actualizarAno"
		@cambiar-nome="actualizarNome"
	></Form>
	<div>
		<Info :nome="nome" :anoNacemento="anoNacemento"></Info>
	</div>
</template>

<style></style>
