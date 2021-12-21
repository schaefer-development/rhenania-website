<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	export let module: Partial<FullWidthImage> = {};
</script>

<div
	class="mod_fullwidthimage relative bg-white shadow-md pt-{module.paddingTop ||
		'10'} pb-{module.paddingBottom || '10'}"
>
	<div class="relative z-10 max-w-screen-lg mx-auto  px-10 ">
		<img src={module.image.url} alt="Rhenania" />
	</div>
</div>
