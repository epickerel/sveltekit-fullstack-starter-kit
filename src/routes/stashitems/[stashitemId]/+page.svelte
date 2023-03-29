<script lang="ts">
	export let data;
	let { stashitem } = data;
</script>

<div>
	<strong>{stashitem?.name}</strong>
	<span>({stashitem?.location})</span>
</div>
