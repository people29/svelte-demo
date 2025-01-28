<script lang="ts">
	import type { PageServerData } from "./$types";
	import type { User } from "$lib/types";

	let users = $state<User[]>([]);
	let number = $state<number>(0);

	let { data }: { data: PageServerData } = $props();
	users = data.users;

	async function save() {
		number = Math.floor(Math.random() * 1000);

		await fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ id: number }),
		});

		users = await fetch('/').then((res) => res.json());
		console.log(users);
	}
</script>

<div>
	{#if users.length > 0}
		{#each users as user}
			<div>
				<span>Username</span>
				<span>{user.name}</span>
			</div>
		{/each}
	{/if}
	{#if number !== undefined}
		<p>rolled:: {number}</p>
	{/if}
	<br />
	<button onclick={save}>Add New User</button>
</div>
