<script lang="ts">
	import type { Eyecatcher } from '$lib/graphql/generated/schema';
	export let module: Partial<FullWidthImage> = {};
</script>

<div class="relative bg-white shadow-md pt-10 pt-{module.paddingTop} pb-10 pb-{module.paddingBottom}">
	<div class="relative z-10 max-w-screen-lg mx-auto  px-10 ">

		<img src={module.image.url} alt="Rhenania" />

	</div>
	
</div>
