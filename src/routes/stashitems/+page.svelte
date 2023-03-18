<script lang="ts">
	export let data;
	let { stashitems } = data;
	// const res = fetch(`http://localhost:5173/api/crud/stashitems`, {
	// 	headers: {
	// 		'ORIGIN-CLIENT': 'bar',
	// 	},
	// });
	// console.log('page', res);
</script>

<ul>
	{#each stashitems as stashitem}
		<li><a href="stashitems/{stashitem.id}">{stashitem.name}</a></li>
	{/each}
</ul>
