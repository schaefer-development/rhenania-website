<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	export let module: Partial<Eyecatcher> = {};
</script>

<h1>Ich bin ein Eyecatcher {module.id}</h1>
