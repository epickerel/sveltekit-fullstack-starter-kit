<script lang="ts">
	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';
	import '../app.css';

	handleSession(page);
</script>

<svelte:head>
	<title>Svelete Fullstack Starter Kit</title>
</svelte:head>
<div>
	<h1><a href="/">Svelete Fullstack Starter Kit</a></h1>
	<slot />
</div>
