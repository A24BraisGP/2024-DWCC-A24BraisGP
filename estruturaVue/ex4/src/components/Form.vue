<script>
export default {
	data() {
		return {};
	},
	props: {
		nome: {
			type: String,
			required: true,
		},
		anoNacemento: { type: Number, required: true },
	},
	emits: ['cambiarNome', 'cambiarAno'],
};
</script>

<template>
	<div>
		<form action="" method="get">
			Name:
			<input
				type="text"
				:value="nome"
				@input="$emit('cambiarNome', $event.target.value)"
			/>
			Ano de Nacemento:
			<input
				type="number"
				:value="anoNacemento"
				@input="$emit('cambiarAno', $event.target.value)"
			/>
		</form>
	</div>
</template>

<style></style>
