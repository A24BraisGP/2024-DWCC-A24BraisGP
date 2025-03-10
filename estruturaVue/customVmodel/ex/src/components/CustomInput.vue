<script>
export default {
	props: ['opcionPulsada'],
	emits: ['update:opcionPulsada'],
	data() {
		return {};
	},
};
</script>

<template>
	<ul class="grid grid-cols-3 place-items-center my-4">
		<li>
			<button
				type="button"
				class="btn btn-accent focus:outline-2 focus:outline-offset-2 focus:outline-green-200"
				@click.stop="
					$emit('update:opcionPulsada', $event.target.innerText)
				"
			>
				Baixo
			</button>
		</li>
		<li>
			<button
				class="btn btn-accent focus:outline-2 focus:outline-offset-2 focus:outline-green-200"
				type="button"
				@click.stop="
					$emit('update:opcionPulsada', $event.target.innerText)
				"
			>
				Medio
			</button>
		</li>
		<li>
			<button
				class="btn btn-accent focus:outline-2 focus:outline-offset-2 focus:outline-green-200"
				type="button"
				@click.stop="
					$emit('update:opcionPulsada', $event.target.innerText)
				"
			>
				Alto
			</button>
		</li>
	</ul>
</template>
