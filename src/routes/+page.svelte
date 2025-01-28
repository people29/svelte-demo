<script lang="ts">
	import type { PageServerData } from "./$types";

	let { data }: { data: PageServerData } = $props();

	const users = data.users;
	console.log(users);
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
</div>
