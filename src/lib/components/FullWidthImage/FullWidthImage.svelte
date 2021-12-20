<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	export let module: Partial<FullWidthImage> = {};
</script>

<div class="relative pt-{module.paddingTop} pb-{module.paddingBottom}">
	<img src={module.image.url} alt="Rhenania" />
</div>
