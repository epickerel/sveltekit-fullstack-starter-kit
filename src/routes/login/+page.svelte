<script lang="ts">
	import { enhance } from '$app/forms';

	export let form: { message?: string };
</script>

<h2>Sign in</h2>
<a href="/api/oauth?provider=github" class="button">Continue with Github</a>
<a href="/api/oauth?provider=discord" class="button">Continue with Discord</a>
