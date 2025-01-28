<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>


<h1>Welcome to SvelteKit</h1>
<h2>Hello World</h2>
<pre>{JSON.stringify(data.users, null, 2)}</pre>