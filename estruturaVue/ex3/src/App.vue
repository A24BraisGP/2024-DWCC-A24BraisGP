<script>
import Contact from './components/Contact.vue';
import '@/assets/tailwind.css';
import FormContact from './components/FormContact.vue';
let id = 0;
export default {
	data() {
		return {
			contacts: [
				{
					id: id++,
					nome: 'Ada Lovelace',
					email: 'ada@lovelace.com',
					telefono: 8888,
					isFav: false,
				},
				{
					id: id++,
					nome: 'Lucky Luck',
					email: 'lucky@shadowfast.com',
					telefono: 9999,
					isFav: false,
				},
			],
		};
	},
	components: {
		Contact,
		FormContact,
	},
	methods: {
		cambiarFav(id) {
			let changeFav = this.contacts.find((el) => el.id === id);
			console.log(changeFav);

			if (changeFav) {
				changeFav.isFav = !changeFav.isFav;
			}
		},
		addContact(nome, email, telefono) {
			this.contacts.push({
				id: id++,
				nome: nome,
				email: email,
				telefono: telefono,
				isFav: false,
			});
		},
		deleteContact(id) {
			let contactToRemove = this.contacts.find((el) => el.id === id);
			let index = this.contacts.indexOf(contactToRemove);
			this.contacts.splice(index, 1);
		},
	},
};
</script>

<template>
	<FormContact @add-contact="addContact"></FormContact>
	<div class="flex-auto text-center justify-center my-5">
		<h1 class="text-2xl underline">Listado</h1>
		<div>
			<Contact
				v-for="contact in contacts"
				:key="contact.id"
				:id="contact.id"
				:nome="contact.nome"
				:email="contact.email"
				:telefono="contact.telefono"
				:is-fav="contact.isFav"
				@cambiar-fav="cambiarFav"
				@delete-contact="deleteContact"
			></Contact>
		</div>
	</div>
</template>

<style></style>
