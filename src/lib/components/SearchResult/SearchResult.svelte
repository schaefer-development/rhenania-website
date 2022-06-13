<script>
	export let hit;
</script>

<h2>{@html hit.__typename}</h2>
<p>{@html hit.title}</p>
<p>{@html hit.description}</p>
<p>{@html hit.teaserText}</p>

<style>
	/* highlights text matching the search string */
	:global(em) {
		color: darkcyan;
		line-height: 1.2em;
		border-radius: 3pt;
		font-style: normal;
	}
</style>
