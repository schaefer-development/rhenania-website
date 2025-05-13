<script lang="ts">
	import type { HeroImage } from '$lib/graphql/generated/schema';
	export let module: Partial<HeroImage> = {};
	let y: number;
	let paraEffect = 0.5;
</script>

<svelte:window bind:scrollY={y} />

<div class="mod_heroImage relative">
	<div class="mb-24 h-[30vh] w-full overflow-hidden">
		<div
			class="parallax relative h-[60vh]"
			style="transform: translate(0, {y < 2 ? y * 1 : y * paraEffect}px)"
		>
			<div
				class="absolute h-[30vh] w-full scale-105 bg-cover bg-center"
				style="background-image: url({module.image?.url}"
			></div>
		</div>
	</div>
	<div
		class="absolute -bottom-3 h-4 w-full"
		style="background-color:{module.strokeColor?.hex}"
	></div>
	<div class="absolute -bottom-20 h-36 w-full">
		<div class="mx-auto h-full max-w-screen-lg px-10">
			{#if module?.icon?.url}
				<img src={module.icon.url} alt="Rhenania Icon" class="h-36 w-36" />
			{:else}
				<!-- -->
			{/if}
		</div>
	</div>
</div>
