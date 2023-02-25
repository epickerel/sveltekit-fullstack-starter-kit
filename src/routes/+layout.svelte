<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client';
	export let data;
	let { session } = data;
	let loggedIn = Object.keys(session || {}).length > 0;
</script>

<div class="user-login">
	{#if loggedIn}
		{#if session?.user?.image}
			<img
				src={session?.user?.image}
				alt={session?.user?.name}
				style="width: 64px; height: 64px;"
			/>
		{/if}
		<span>
			<strong>{session?.user?.email || session?.user?.name}</strong>
		</span>
		<span>Session expires: {new Date(session?.expires ?? 0).toUTCString()}</span>
		<button on:click={() => signOut()} class="button">Sign out</button>
	{:else}
		<button on:click={() => signIn('github')}>Sign In with GitHub</button>
		<button on:click={() => signIn('discord')}>Sign In with Discord</button>
	{/if}
</div>

{#if loggedIn}
	<slot />
{/if}

<style>
	.user-login > img {
		display: block;
	}
	.user-login > span {
		display: block;
	}
</style>
