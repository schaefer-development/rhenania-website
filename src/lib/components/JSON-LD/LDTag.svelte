<script>
	import { serializeSchema } from '$lib/components/JSON-LD/json-ld.js';
	export let schema;
</script>

<svelte:head>
	{@html serializeSchema(schema)}
</svelte:head>
