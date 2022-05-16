<script lang="ts">
	import type { Image } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<Image> = {};
</script>

<div class="mod_image relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}" />
	<div class="relative flex flex-col">
		{#if module.imageWidth == 'FullWidth'}
			<div
				class="w-full h-30v bg-cover bg-center"
				style="background-image: url({module.image.url})"
			/>
		{/if}

		{#if module.imageWidth == 'ContentWidth'}
			<div class="relative max-w-screen-lg mx-auto px-10">
				<img src={module.image.url} alt="Rhenania" class="w-full mx-auto h-auto" />
			</div>
		{/if}

		{#if module.imageWidth == 'HalfContentWidth'}
			<div class="relative max-w-screen-lg mx-auto px-10">
				<img src={module.image.url} alt="Rhenania" class="w-6/12 mx-auto h-auto" />
			</div>
		{/if}

		{#if module.imageWidth == 'QuarterContentWidth'}
			<div class="relative max-w-screen-lg mx-auto px-10">
				<img src={module.image.url} alt="Rhenania" class="w-3/12 mx-auto h-auto" />
			</div>
		{/if}
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}" />
</div>
