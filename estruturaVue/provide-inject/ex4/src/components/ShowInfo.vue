<script>
export default {
	data() {
		return {};
	},
	inject: ['userData'],
};
</script>

<template>
	<div v-if="userData">
		<div class="grid grid-cols-2 place-items-center gap-5">
			<div class="card bg-base-100 w-96 shadow-sm my-5">
				<figure>
					<img :src="userData.avatar" :alt="userData.id" />
				</figure>
				<div class="card-body">
					<h2 class="card-title">
						{{ userData.last_name }}, {{ userData.first_name }}
						<div class="badge badge-secondary">
							{{ userData.subscription.plan }}
						</div>
					</h2>
					<div class="divider divider-secondary"></div>
					<p>{{ userData.subscription.payment_method }}</p>
					<p>{{ userData.subscription.status }}</p>
					<p>{{ userData.subscription.term }}</p>
					<div class="card-actions justify-end">
						<div class="badge badge-outline">
							{{ userData.phone_number }}
						</div>
						<div class="badge badge-outline">
							{{ userData.email }}
						</div>
					</div>
				</div>
			</div>
			<div class="card bg-base-100 w-96 shadow-sm">
				<div class="card-body">
					<dl
						class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700"
					>
						<div class="flex flex-col pb-3">
							<dt
								class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"
							>
								Address
							</dt>
							<dd class="text-lg font-semibold">
								{{ userData.address.country }} -
								{{ userData.address.state }} -
								{{ userData.address.city }}
							</dd>
						</div>
						<div class="flex flex-col py-3">
							<dt
								class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"
							>
								Employment
							</dt>
							<dd class="text-lg font-semibold">
								{{ userData.employment.title }} =>
								{{ userData.employment.key_skill }}
							</dd>
						</div>
						<div class="flex flex-col pt-3">
							<dt
								class="mb-1 text-gray-500 md:text-lg dark:text-gray-400"
							>
								Gender
							</dt>
							<dd class="text-lg font-semibold">
								{{ userData.gender }}
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	</div>
	<div v-else class="text-base-100">Loading...</div>
</template>
