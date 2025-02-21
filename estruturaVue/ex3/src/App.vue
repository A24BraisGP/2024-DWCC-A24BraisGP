<script>
import Contact from './components/Contact.vue';
import '@/assets/tailwind.css';
export default {
	data() {
		return {
			contacts: [
				{
					id: 1,
					nome: 'Ada Lovelace',
					email: 'ada@lovelace.com',
					telefono: 8888,
				},
				{
					id: 2,
					nome: 'Lucky Luck',
					email: 'lucky@shadowfast.com',
					telefono: 9999,
				},
			],
		};
	},
	components: {
		Contact,
	},
};
</script>

<template>
	<div class="flex-auto text-center justify-center my-5">
		<h1 class="text-2xl underline">Listado</h1>
		<div>
			<Contact
				v-for="contact in contacts"
				:key="id"
				:nome="contact.nome"
				:email="contact.email"
				:telefono="contact.telefono"
			></Contact>
		</div>
	</div>
</template>

<style></style>
