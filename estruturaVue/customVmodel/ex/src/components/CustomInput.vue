<script>
export default {
	props: ['opcionPulsada'],
	emits: ['update:opcionPulsada'],
	data() {
		return {};
	},
	methods: {
		actButt(event) {
			document
				.querySelectorAll('button')
				.forEach((el) =>
					el.classList.remove(
						'outline-2',
						'outline-offset-2',
						'outline-green-200'
					)
				);
			event.target.classList.add(
				'outline-2',
				'outline-offset-2',
				'outline-green-200'
			);
		},
	},
};
</script>

<template>
	<ul class="grid grid-cols-3 place-items-center my-4">
		<li>
			<button
				type="button"
				class="btn btn-accent"
				value="Baixo"
				@click="actButt"
				@click.stop="$emit('update:opcionPulsada', $event.target.value)"
			>
				Baixo
			</button>
		</li>
		<li>
			<button
				class="btn btn-accent"
				type="button"
				value="Medio"
				@click="actButt"
				@click.stop="$emit('update:opcionPulsada', $event.target.value)"
			>
				Medio
			</button>
		</li>
		<li>
			<button
				class="btn btn-accent"
				type="button"
				value="Alto"
				@click="actButt"
				@click.stop="$emit('update:opcionPulsada', $event.target.value)"
			>
				Alto
			</button>
		</li>
	</ul>
</template>
