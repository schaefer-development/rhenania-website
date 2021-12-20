<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	export let module: Partial<FullWidthImage> = {};
</script>

<div class="relative py-6 lg:py-12">
	<img src={module.image.url} alt="Rhenania" />
</div>
