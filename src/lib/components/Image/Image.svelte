<script lang="ts">
	import { mapPadding } from '$lib/helpers';
	export let module: Partial<Image> = {};
</script>

<div class="relative w-full {mapPadding(module.paddingTop)}" />
<div class="mod_fullwidthimage relative">
	{#if module.imageWidth == 'FullWidth'}
		<div
			class="w-full h-30v bg-cover bg-center "
			style="background-image: url({module.image.url})"
		/>
	{/if}

	{#if module.imageWidth == 'ContentWidth'}
		<div class="max-w-screen-md mx-auto px-10">
			<img src={module.image.url} alt="Rhenania" />
		</div>
	{/if}
</div>
<div class="relative w-full {mapPadding(module.paddingBottom)}" />
