<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	export let module: Partial<FullWidthImage> = {};
</script>

<div class="relative pt-10 pt-{module.paddingTop} pb-10 pb-{module.paddingBottom}">
	<img src={module.image.url} alt="Rhenania" />
</div>
