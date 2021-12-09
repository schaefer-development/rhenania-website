<script lang="ts">
	import type { Divider } from '$lib/graphql/generated/schema';
	export let module: Partial<Divider> = { padding: 0 };
</script>

<h1>Ich bin der Divider mit padding {module.padding}</h1>
