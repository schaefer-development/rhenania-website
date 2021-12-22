<script lang="ts">
	export let module: Partial<Image> = {};
</script>

<div
	class="mod_fullwidthimage relative pt-{module.paddingTop || '10'} pb-{module.paddingBottom ||
		'10'}"
>
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
