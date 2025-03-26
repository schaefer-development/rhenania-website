<script lang="ts">
	import type { Image } from '$lib/graphql/generated/schema';
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<Image> = {};
</script>

<div class="mod_image relative">
	<div class="relative w-full {mapPadding(module.paddingTop)}"></div>
	<div class="relative flex flex-col">
		{#if module.imageWidth == 'FullWidth'}
			<div
				class="h-30v w-full bg-cover bg-center"
				style="background-image: url({module.image.url})"
			></div>
		{/if}

		{#if module.imageWidth == 'ContentWidth'}
			<div class="relative mx-auto max-w-screen-lg px-10">
				<img src={module.image.url} alt="Rhenania" class="mx-auto h-auto w-full" />
			</div>
		{/if}

		{#if module.imageWidth == 'HalfContentWidth'}
			<div class="relative mx-auto max-w-screen-lg px-10">
				<img src={module.image.url} alt="Rhenania" class="mx-auto h-auto w-6/12" />
			</div>
		{/if}

		{#if module.imageWidth == 'QuarterContentWidth'}
			<div class="relative mx-auto max-w-screen-lg px-10">
				<img src={module.image.url} alt="Rhenania" class="mx-auto h-auto w-3/12" />
			</div>
		{/if}
	</div>
	<div class="relative w-full {mapPadding(module.paddingBottom)}"></div>
</div>
