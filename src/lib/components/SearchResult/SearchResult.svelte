<script>
	export let hit;
</script>

<div class="py-2">
	<p>{@html hit.description}</p>
	<a href="">{@html hit.slug}</a>
	<hr class="mt-4" />
</div>

<style>
	/* highlights text matching the search string */
	:global(em) {
		color: #ea3336;
		font-weight: bold;
		font-style: normal;
	}
</style>
