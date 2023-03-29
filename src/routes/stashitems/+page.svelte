<script lang="ts">
	export let data;
	let { stashitems } = data;
</script>

<ul>
	{#each stashitems || [] as stashitem}
		<li><a href="stashitems/{stashitem.id}">{stashitem.name}</a></li>
	{/each}
</ul>
